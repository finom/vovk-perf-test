import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahas")
export default class AhaController {
  @operation({
    summary: "Get Ahas",
  })
  @get()
  static getAhas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aha",
  })
  @post("{id}")
  static createAha = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
