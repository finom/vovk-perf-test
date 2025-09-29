import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvfs")
export default class KvfController {
  @operation({
    summary: "Get Kvfs",
  })
  @get()
  static getKvfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvf",
  })
  @post("{id}")
  static createKvf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
