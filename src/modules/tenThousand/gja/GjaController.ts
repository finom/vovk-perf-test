import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjas")
export default class GjaController {
  @operation({
    summary: "Get Gjas",
  })
  @get()
  static getGjas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gja",
  })
  @post("{id}")
  static createGja = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
