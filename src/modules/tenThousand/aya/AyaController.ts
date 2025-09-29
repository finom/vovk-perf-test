import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ayas")
export default class AyaController {
  @operation({
    summary: "Get Ayas",
  })
  @get()
  static getAyas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aya",
  })
  @post("{id}")
  static createAya = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
