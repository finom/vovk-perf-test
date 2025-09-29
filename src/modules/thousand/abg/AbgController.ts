import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abgs")
export default class AbgController {
  @operation({
    summary: "Get Abgs",
  })
  @get()
  static getAbgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Abg",
  })
  @post("{id}")
  static createAbg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
