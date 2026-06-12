import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("car")
export default class CarController {
  @operation({
    summary: "Get Car",
  })
  @get()
  static getCar = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Car",
  })
  @post("{id}")
  static createCar = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
