import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aes")
export default class AesController {
  @operation({
    summary: "Get Aes",
  })
  @get()
  static getAes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aes",
  })
  @post("{id}")
  static createAes = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
