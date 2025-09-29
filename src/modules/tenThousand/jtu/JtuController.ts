import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jtus")
export default class JtuController {
  @operation({
    summary: "Get Jtus",
  })
  @get()
  static getJtus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jtu",
  })
  @post("{id}")
  static createJtu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
