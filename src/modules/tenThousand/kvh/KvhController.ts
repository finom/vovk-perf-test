import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvhs")
export default class KvhController {
  @operation({
    summary: "Get Kvhs",
  })
  @get()
  static getKvhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvh",
  })
  @post("{id}")
  static createKvh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
