import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edds")
export default class EddController {
  @operation({
    summary: "Get Edds",
  })
  @get()
  static getEdds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Edd",
  })
  @post("{id}")
  static createEdd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
