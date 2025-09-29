import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ars")
export default class ArsController {
  @operation({
    summary: "Get Ars",
  })
  @get()
  static getArs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ars",
  })
  @post("{id}")
  static createArs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
