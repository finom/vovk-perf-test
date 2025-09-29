import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvws")
export default class KvwController {
  @operation({
    summary: "Get Kvws",
  })
  @get()
  static getKvws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvw",
  })
  @post("{id}")
  static createKvw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
