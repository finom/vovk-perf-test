import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("koas")
export default class KoaController {
  @operation({
    summary: "Get Koas",
  })
  @get()
  static getKoas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Koa",
  })
  @post("{id}")
  static createKoa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
