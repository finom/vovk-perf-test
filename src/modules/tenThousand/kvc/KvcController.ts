import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvcs")
export default class KvcController {
  @operation({
    summary: "Get Kvcs",
  })
  @get()
  static getKvcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvc",
  })
  @post("{id}")
  static createKvc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
