# Theory

## Ohm's Law

The law states that the current through a conductor between two points is directly proportional to the voltage across the two points. Such a conductor is characterized by its ‘Resistance’ – R measured in Ohms.
V=I×R
V is the Voltage in Volts across the conductor.
I is the current in Amperes through the conductor.
Voltage(V) is directly proportional to current i.e V=I×R.
Resistance(R) in inversely proportional to current(I) i.e $$I=\frac{V}{R}$$

<div align="center">
<img src="images/ohmtr.png" width="10%">
<p>Figure 1: Ohm's Law triangle  </p>
</div>

### NOTE:

From the above figure, the equation may be represented by a triangle known as Ohm's Law triangle, where V (voltage) is placed on the top section, the I (current) is placed to the left section, and the R (resistance) is placed to the right. The line that divides the left and right sections indicates multiplication, and the divider between the top and bottom sections indicates division.

Therefore equations derived from Ohm's law triangle are-

V=I×R
 
$$I=\frac{V}{R}$$

$$R=\frac{V}{I}$$

### Explaination of Ohm's Law
<div align="center">
<img src="images/ohmt2.png" width="10%">
<p>Figure 2: Current through resistor  </p>
</div>

From the circuit:

The voltage across resistor is equal to source voltage:

$$V_R = V_S$$

The current through the resistance is given by:

$$I=\frac{V_R}{R}$$

### Explaination of Ohm's Law for Resistance in series

Series circuits are sometimes called current-coupled or daisy chain-coupled. The current in a series circuit goes through every component in the circuit. Therefore, all of the components in a series connection carry the same current. There is only one path in a series circuit in which the current can flow.

Current:

$$I=I_1=I_2=I_3$$

Resistance:

$$R_{eq}=R-1+R_2+R_3$$

Voltage:

$$V_S=V_{R1}+V_{R2}+V_{R3}$$

<div align="center">
<img src="images/ohmt3.png" width="10%">
<p>Figure 3: Series resistor  </p>
</div>

From the circuit:

The equivalent resistance,

$$R_{eq}=R_1+R_2$$

The total current of the circuit,

$$I_T=\frac{V_S}{R_{eq}}$$

Voltage across each resistance are,

For resistance R1,

$$V_{R1}=R_1×I_T$$

For resistance R2,

$$V_{R2}=R_2×I_T$$

In a series circuit, the current through each of the resistors is the same, and the voltage across the circuit is the sum of the voltages across each resistor.

### Explaination of Ohm's Law for Resistance in parallel

If two or more components are connected in parallel they have the same potential difference (voltage) across their ends. The potential differences across the components are the same in magnitude, and they also have identical polarities. The same voltage is applicable to all circuit components connected in parallel. The total current is the sum of the currents through the individual components, in accordance with Kirchhoff’s current law.

Voltage:

$$V=V_1=V_2=V_3$$

Resistance:

$$\frac{1}{R_{eq}}=\frac{1}{R_1}+\frac{1}{R_2}+\frac{1}{R_3}$$

Current:

$$I_T=I_{R1}+I_{R2}+I_{R3}$$


<div align="center">
<img src="images/ohmt4.png" width="10%">
<p>Figure 4: Parallel resistor  </p>
</div>

From the circuit:

The equivalent resistance,

$$R_{eq}=\frac{R_1×R_2}{R_1+R_2}$$

The total current of the circuit,

$$I_T=\frac{V_S}{R_{eq}}$$

Current across each resistance are,

For resistance R1,

$$I_{R1}=\frac{V_S}{R_1}$$

For resistance R2,

$$I_{R2}=\frac{V_S}{R_2}$$

In a parallel circuit, the voltage across each of the resistors is the same, and the total current is the sum of the currents through each resistor.


### Explaination of Non Ohmic Device

A Non ohmic device is a device that does not obey Ohm's Law i.e. the resistance is not constant, but changes in a way that depends on the voltage across it.The device is said to be non-Ohmic. In this case V versus I graph is not a straight line, but has some curvy shape. Such devices do not have a constant value of resistance and the resistance is called dynamic resistance because it is constantly changing.Examples of such devices are tungsten filament (bulb), diode,thermistor etc.



<div align="center">
<img src="images/ohmtnhm.png" width="10%">
<p>Figure 5: Non Ohmic Device  </p>
</div>

### Note

- Ohms Law is a very useful law but it only applies to devices that behave like resistors – ie – I is simply proportional to V.
- Ohms Law describes one possible relationship between V and I in a component, but there are others, like
    - Capacitors ( I proportional to rate of change of V )
    - Diodes ( I flows in only 1 direction )
    - Thermistors ( Temperature dependent resistors )


    ## Assignments

1. A 3 volt battery sends a current of 1 ampere through a light bulb. What is the resistance of the filament of the bulb?
    [Ans:3Ω]


2.  Determine the value of R5 and current through it (IR5), if current through branch AB is zero and R1=1Ω,R2=1.5 Ω,R3=2Ω,R4=4Ω,VS=10 V.
[Ans:R5=6Ω and IR5=0.5 A]

<div align="center">
<img src="images/ohmsassgn1.png" width="10%">
<p>Figure 1  </p>
</div>

3. A 50Ω resistor is in parallel with 100Ω resistor. Current in 50Ω resistor is 7.2 A. How will you add a third resistor and what will be its value of the line-current is to be its value if the line-current is to be 12.1 amp ?
[Ans:Third resistance must be connected in parallel with 277Ω]

4. A resistor of 12 Ω is connected in series with a combination of 15 Ω and 20 Ω resistor in parallel. When a voltage of 120 V is applied across the whole circuit find the current taken from the supply.
[Ans:5 A ]

5. Three parallel connected resistors when connected across a d.c. voltage source dissipate a total power of 72 W. The total current drawn is 6 A, the current flowing through the first resistor is 3 A and the second and third resistors have equal value. What are the resistances of the three resistors ?
[Ans:4Ω, 8Ω, 8Ω ]

6. Calculate the voltage drop across the following electrical loads:
    1. The bulb that has 2.4 amperes flowing through it. The resistance of the bulb is 16 ohms.
[Ans:38.4V]

    2. A coffee grinder that has a resistance of 85 ohms and a current of 1.41 amperes flowing through it.
[Ans:119.85V]

     3. A current of 0.024 amperes flowing through a resistance of 750 ohms.
[Ans:18V]

7. A resistance of 10 Ω(R1) is connected in series with two resistances each of 15 Ω(R2 and R3) arranged in parallel. What resistance(R4) must be shunted across this parallel combination so that the total current taken shall be 1.5 A with 20 V applied ?
[Ans:R4=6Ω]

<div align="center">
<img src="images/ohmsassgn2.png" width="10%">
<p>Figure 2  </p>
</div>

8. Compute the relative potentials of points A, B, C, D and E which point A is grounded. Calculate the voltage drop across resistance R1? Does it affect the circuit operation or potential difference between any pair of points ?[where, R1=6Ω,R2=2 Ω,R3=4Ω,VS1=34 V,VS2=10 V,I=2 A].
[Ans:V=12 V]

<div align="center">
<img src="images/ohmsassgn3.png" width="10%">
<p>Figure 3  </p>
</div>

<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>