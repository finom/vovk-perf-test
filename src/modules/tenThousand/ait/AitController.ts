import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aits")
export default class AitController {
  @operation({
    summary: "Get Aits",
  })
  @get()
  static getAits = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ait",
  })
  @post("{id}")
  static createAit = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
