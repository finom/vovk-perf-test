import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akvs")
export default class AkvController {
  @operation({
    summary: "Get Akvs",
  })
  @get()
  static getAkvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Akv",
  })
  @post("{id}")
  static createAkv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
