import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chas")
export default class ChaController {
  @operation({
    summary: "Get Chas",
  })
  @get()
  static getChas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cha",
  })
  @post("{id}")
  static createCha = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
