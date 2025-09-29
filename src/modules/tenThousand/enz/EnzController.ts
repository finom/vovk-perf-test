import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("enzs")
export default class EnzController {
  @operation({
    summary: "Get Enzs",
  })
  @get()
  static getEnzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Enz",
  })
  @post("{id}")
  static createEnz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
