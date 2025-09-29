import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imts")
export default class ImtController {
  @operation({
    summary: "Get Imts",
  })
  @get()
  static getImts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Imt",
  })
  @post("{id}")
  static createImt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
