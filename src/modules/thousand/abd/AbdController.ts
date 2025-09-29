import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abds")
export default class AbdController {
  @operation({
    summary: "Get Abds",
  })
  @get()
  static getAbds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Abd",
  })
  @post("{id}")
  static createAbd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
