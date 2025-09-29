import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvjs")
export default class KvjController {
  @operation({
    summary: "Get Kvjs",
  })
  @get()
  static getKvjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvj",
  })
  @post("{id}")
  static createKvj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
