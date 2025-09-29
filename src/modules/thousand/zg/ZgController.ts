import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zgs")
export default class ZgController {
  @operation({
    summary: "Get Zgs",
  })
  @get()
  static getZgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zg",
  })
  @post("{id}")
  static createZg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
