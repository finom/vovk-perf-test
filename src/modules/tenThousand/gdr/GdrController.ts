import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdrs")
export default class GdrController {
  @operation({
    summary: "Get Gdrs",
  })
  @get()
  static getGdrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gdr",
  })
  @post("{id}")
  static createGdr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
