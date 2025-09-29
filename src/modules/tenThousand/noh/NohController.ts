import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nohs")
export default class NohController {
  @operation({
    summary: "Get Nohs",
  })
  @get()
  static getNohs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Noh",
  })
  @post("{id}")
  static createNoh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
