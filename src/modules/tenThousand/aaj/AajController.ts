import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aajs")
export default class AajController {
  @operation({
    summary: "Get Aajs",
  })
  @get()
  static getAajs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aaj",
  })
  @post("{id}")
  static createAaj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
