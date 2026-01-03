import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cars")
export default class CarController {
  @operation({
    summary: "Get Cars",
  })
  @get()
  static getCars = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Car",
  })
  @post("{id}")
  static createCar = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
