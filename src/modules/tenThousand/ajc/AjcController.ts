import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajcs")
export default class AjcController {
  @operation({
    summary: "Get Ajcs",
  })
  @get()
  static getAjcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ajc",
  })
  @post("{id}")
  static createAjc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
