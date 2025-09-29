import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eyxes")
export default class EyxController {
  @operation({
    summary: "Get Eyxes",
  })
  @get()
  static getEyxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eyx",
  })
  @post("{id}")
  static createEyx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
