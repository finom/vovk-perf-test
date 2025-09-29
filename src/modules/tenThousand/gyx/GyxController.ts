import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gyxes")
export default class GyxController {
  @operation({
    summary: "Get Gyxes",
  })
  @get()
  static getGyxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gyx",
  })
  @post("{id}")
  static createGyx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
