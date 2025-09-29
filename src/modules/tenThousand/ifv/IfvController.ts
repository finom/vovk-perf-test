import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifvs")
export default class IfvController {
  @operation({
    summary: "Get Ifvs",
  })
  @get()
  static getIfvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ifv",
  })
  @post("{id}")
  static createIfv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
