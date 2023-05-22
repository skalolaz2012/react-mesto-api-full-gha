import { useContext } from 'react'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import Card from '../Card/Card'
import Loader from '../Loader/Loader'

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
  isLoaded,
}) {
  const currentUser = useContext(CurrentUserContext)

  return (
    <>
      {!isLoaded ? (
        <Loader />
      ) : (
        <main className="content">
          <section className="profile">
            <div className="profile__circle">
              <img
                src={currentUser.user.avatar}
                alt="Фотография пользователя"
                className="profile__avatar"
              />
              <button
                type="button"
                aria-label="Кнопка редактирования аватара"
                className="profile__edit-avatar"
                onClick={onEditAvatar}
              ></button>
            </div>
            <div className="profile__info">
              <h1 className="profile__title">{currentUser.user.name}</h1>
              <button
                type="button"
                aria-label="Кнопка редактирования профиля 'о себе'"
                className="profile__edit-button"
                onClick={onEditProfile}
              ></button>
              <p className="profile__text">{currentUser.user.about}</p>
            </div>
            <button
              type="button"
              aria-label="Кнопка добавления фотографий в альбом"
              className="profile__add-button"
              onClick={onAddPlace}
            >
              +
            </button>
          </section>
          <section className="elements">
            <ul className="elements__list">
              {cards.map((card) => (
                <Card
                  card={card}
                  onCardClick={onCardClick}
                  onCardLike={onCardLike}
                  onCardDelete={onCardDelete}
                  key={card._id}
                  name={card.name}
                  link={card.link}
                />
              ))}
            </ul>
          </section>
        </main>
      )}
    </>
  )
}

export default Main
