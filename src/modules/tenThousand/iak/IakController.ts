import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iaks")
export default class IakController {
  @operation({
    summary: "Get Iaks",
  })
  @get()
  static getIaks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iak",
  })
  @post("{id}")
  static createIak = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
