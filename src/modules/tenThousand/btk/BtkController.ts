import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("btks")
export default class BtkController {
  @operation({
    summary: "Get Btks",
  })
  @get()
  static getBtks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Btk",
  })
  @post("{id}")
  static createBtk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
