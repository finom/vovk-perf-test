import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aes")
export default class AeController {
  @operation({
    summary: "Get Aes",
  })
  @get()
  static getAes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ae",
  })
  @post("{id}")
  static createAe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
