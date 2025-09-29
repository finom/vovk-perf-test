import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bos")
export default class BosController {
  @operation({
    summary: "Get Bos",
  })
  @get()
  static getBos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bos",
  })
  @post("{id}")
  static createBos = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
