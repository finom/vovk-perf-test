import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdvs")
export default class HdvController {
  @operation({
    summary: "Get Hdvs",
  })
  @get()
  static getHdvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hdv",
  })
  @post("{id}")
  static createHdv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
