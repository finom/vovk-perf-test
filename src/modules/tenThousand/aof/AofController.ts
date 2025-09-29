import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aofs")
export default class AofController {
  @operation({
    summary: "Get Aofs",
  })
  @get()
  static getAofs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aof",
  })
  @post("{id}")
  static createAof = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
