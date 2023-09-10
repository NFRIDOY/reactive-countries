
export default function Country(props) {
    // const { name} = props;
    // const { name, official, nativeName,  } = props;
    const countryName = props?.country?.name?.common;
    const countryOfficialName = props?.country?.name?.nativeName?.eng?.official;
    // console.log(countryName);
    console.log(props?.country?.name?.nativeName?.eng?.official);
    return (
        <>
            <div className="countryBox" style={{"border": "2px solid red"}}>
                <h1>Country: {countryName}</h1>
                {
                countryOfficialName && (
                <h2>Official Name: {countryOfficialName ? countryOfficialName : ""}</h2>
                )
                }

            </div>
        </>
    )
}
