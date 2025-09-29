import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvqs")
export default class KvqController {
  @operation({
    summary: "Get Kvqs",
  })
  @get()
  static getKvqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvq",
  })
  @post("{id}")
  static createKvq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
