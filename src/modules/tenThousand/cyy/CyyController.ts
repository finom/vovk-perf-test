import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cyys")
export default class CyyController {
  @operation({
    summary: "Get Cyys",
  })
  @get()
  static getCyys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cyy",
  })
  @post("{id}")
  static createCyy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
