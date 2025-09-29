import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("guns")
export default class GunController {
  @operation({
    summary: "Get Guns",
  })
  @get()
  static getGuns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gun",
  })
  @post("{id}")
  static createGun = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
