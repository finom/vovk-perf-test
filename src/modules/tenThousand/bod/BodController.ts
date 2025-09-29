import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bods")
export default class BodController {
  @operation({
    summary: "Get Bods",
  })
  @get()
  static getBods = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bod",
  })
  @post("{id}")
  static createBod = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
