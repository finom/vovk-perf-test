import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajrs")
export default class AjrController {
  @operation({
    summary: "Get Ajrs",
  })
  @get()
  static getAjrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ajr",
  })
  @post("{id}")
  static createAjr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
