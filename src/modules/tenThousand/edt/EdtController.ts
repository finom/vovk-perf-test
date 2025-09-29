import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edts")
export default class EdtController {
  @operation({
    summary: "Get Edts",
  })
  @get()
  static getEdts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Edt",
  })
  @post("{id}")
  static createEdt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
