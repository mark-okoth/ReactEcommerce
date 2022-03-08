import React from "react";
import "../New.css";
//ut176914
function New() {
  return (
    <div className="main">
      <div className="left-column item">
        <div className="card-Category">
          <select name="categories" id="">
            <option value="Jordans">Nike Airforce</option>
            <option value="Nike">Nike Sneaker</option>
            <option value="mercedes">Jordan Air 6</option>
          </select>
        </div>
        <div className="radiobtn">
          <form>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1">Flip Flops</label>
            <br />
            <br />
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <label for="vehicle2"> Sneakers</label>
            <br />
            <br />
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle1">Lace-up Shoes</label>
            <br />
            <br />
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle1">Shoes Accessories</label>
          </form>
        </div>
        <div className="progress-Bar">
          <p>Price Range</p>
          <progress max="10000">test</progress>
        </div>
        <div className="size">
          <button>35</button>
          <button>36</button>
          <button>37</button>
          <button>38</button>
          <button>39</button>
          <button>40</button>
          <button>41</button>
          <button>42</button>
          <button>43</button>
          <button>44</button>
          <button>45</button>
          <button>46</button>
          <button>47</button>
          <button>48</button>
          <button>49</button>
        </div>
      </div>
      <div className="middle-column item">
        <p>Hello</p>
      </div>
      <div className="right-column item">
        <p>hello</p>
      </div>
    </div>
  );
}

export default New;
