import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cars")
export default class CarController {
  @operation({
    summary: "Get Cars",
  })
  @get()
  static getCars = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Car",
  })
  @post("{id}")
  static createCar = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
