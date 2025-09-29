import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("baos")
export default class BaoController {
  @operation({
    summary: "Get Baos",
  })
  @get()
  static getBaos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bao",
  })
  @post("{id}")
  static createBao = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
