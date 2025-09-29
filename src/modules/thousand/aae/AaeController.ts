import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aaes")
export default class AaeController {
  @operation({
    summary: "Get Aaes",
  })
  @get()
  static getAaes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aae",
  })
  @post("{id}")
  static createAae = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
