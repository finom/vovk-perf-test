import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvies")
export default class KvyController {
  @operation({
    summary: "Get Kvies",
  })
  @get()
  static getKvies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvy",
  })
  @post("{id}")
  static createKvy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
