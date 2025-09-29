import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwgs")
export default class KwgController {
  @operation({
    summary: "Get Kwgs",
  })
  @get()
  static getKwgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwg",
  })
  @post("{id}")
  static createKwg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
