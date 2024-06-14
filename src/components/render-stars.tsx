export function renderStars(grade: number) {
    const totalStars = 5;
    const starsArray = [];
    for (let i = 0; i < totalStars; i++) {
        starsArray.push(
            <svg
                key={i}
        className="star"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={i < grade ? "#56CCF2" : "#030827"}
    >
        <path d="M12 .587l3.668 7.431 8.175 1.191-5.916 5.761 1.396 8.14L12 18.897l-7.323 3.852 1.396-8.14-5.916-5.761 8.175-1.191z" />
            </svg>
    );
    }
    return starsArray;
}
