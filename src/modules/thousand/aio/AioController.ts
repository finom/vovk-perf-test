import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aios")
export default class AioController {
  @operation({
    summary: "Get Aios",
  })
  @get()
  static getAios = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aio",
  })
  @post("{id}")
  static createAio = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
