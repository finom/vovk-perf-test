import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejs")
export default class EjsController {
  @operation({
    summary: "Get Ejs",
  })
  @get()
  static getEjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ejs",
  })
  @post("{id}")
  static createEjs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
