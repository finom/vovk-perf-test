import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gaos")
export default class GaoController {
  @operation({
    summary: "Get Gaos",
  })
  @get()
  static getGaos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gao",
  })
  @post("{id}")
  static createGao = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
