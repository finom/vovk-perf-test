import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imws")
export default class ImwController {
  @operation({
    summary: "Get Imws",
  })
  @get()
  static getImws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Imw",
  })
  @post("{id}")
  static createImw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
