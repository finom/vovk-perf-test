import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gnus")
export default class GnuController {
  @operation({
    summary: "Get Gnus",
  })
  @get()
  static getGnus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gnu",
  })
  @post("{id}")
  static createGnu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
