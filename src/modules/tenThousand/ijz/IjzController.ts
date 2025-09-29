import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijzs")
export default class IjzController {
  @operation({
    summary: "Get Ijzs",
  })
  @get()
  static getIjzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ijz",
  })
  @post("{id}")
  static createIjz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
