import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckvs")
export default class CkvController {
  @operation({
    summary: "Get Ckvs",
  })
  @get()
  static getCkvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ckv",
  })
  @post("{id}")
  static createCkv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
