import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihfs")
export default class IhfController {
  @operation({
    summary: "Get Ihfs",
  })
  @get()
  static getIhfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ihf",
  })
  @post("{id}")
  static createIhf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
