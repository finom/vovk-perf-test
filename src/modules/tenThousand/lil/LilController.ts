import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lils")
export default class LilController {
  @operation({
    summary: "Get Lils",
  })
  @get()
  static getLils = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lil",
  })
  @post("{id}")
  static createLil = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
