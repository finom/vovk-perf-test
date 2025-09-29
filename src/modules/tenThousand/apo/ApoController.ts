import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("apos")
export default class ApoController {
  @operation({
    summary: "Get Apos",
  })
  @get()
  static getApos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Apo",
  })
  @post("{id}")
  static createApo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
