import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jsps")
export default class JspController {
  @operation({
    summary: "Get Jsps",
  })
  @get()
  static getJsps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jsp",
  })
  @post("{id}")
  static createJsp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
