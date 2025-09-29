import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkvs")
export default class KkvController {
  @operation({
    summary: "Get Kkvs",
  })
  @get()
  static getKkvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kkv",
  })
  @post("{id}")
  static createKkv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
