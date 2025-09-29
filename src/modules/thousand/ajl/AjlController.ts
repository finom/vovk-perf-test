import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajls")
export default class AjlController {
  @operation({
    summary: "Get Ajls",
  })
  @get()
  static getAjls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ajl",
  })
  @post("{id}")
  static createAjl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
