import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvgs")
export default class KvgController {
  @operation({
    summary: "Get Kvgs",
  })
  @get()
  static getKvgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvg",
  })
  @post("{id}")
  static createKvg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
