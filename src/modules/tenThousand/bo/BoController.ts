import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bos")
export default class BoController {
  @operation({
    summary: "Get Bos",
  })
  @get()
  static getBos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bo",
  })
  @post("{id}")
  static createBo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
