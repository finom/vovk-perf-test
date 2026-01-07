import { procedure, prefix, get, post, operation } from "vovk";

@prefix("car")
export default class CarController {
  @operation({
    summary: "Get Car",
  })
  @get()
  static getCar = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Car",
  })
  @post("{id}")
  static createCar = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
