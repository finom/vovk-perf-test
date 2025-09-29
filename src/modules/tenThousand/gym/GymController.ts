import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gyms")
export default class GymController {
  @operation({
    summary: "Get Gyms",
  })
  @get()
  static getGyms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gym",
  })
  @post("{id}")
  static createGym = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
