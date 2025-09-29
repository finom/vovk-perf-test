import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cygs")
export default class CygController {
  @operation({
    summary: "Get Cygs",
  })
  @get()
  static getCygs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cyg",
  })
  @post("{id}")
  static createCyg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
