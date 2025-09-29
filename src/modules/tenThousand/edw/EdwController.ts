import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edws")
export default class EdwController {
  @operation({
    summary: "Get Edws",
  })
  @get()
  static getEdws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Edw",
  })
  @post("{id}")
  static createEdw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
