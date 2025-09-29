import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jezs")
export default class JezController {
  @operation({
    summary: "Get Jezs",
  })
  @get()
  static getJezs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jez",
  })
  @post("{id}")
  static createJez = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
