import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajds")
export default class AjdController {
  @operation({
    summary: "Get Ajds",
  })
  @get()
  static getAjds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ajd",
  })
  @post("{id}")
  static createAjd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
