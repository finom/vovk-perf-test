import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejs")
export default class EjController {
  @operation({
    summary: "Get Ejs",
  })
  @get()
  static getEjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ej",
  })
  @post("{id}")
  static createEj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
