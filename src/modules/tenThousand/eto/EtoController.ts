import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("etos")
export default class EtoController {
  @operation({
    summary: "Get Etos",
  })
  @get()
  static getEtos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eto",
  })
  @post("{id}")
  static createEto = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
