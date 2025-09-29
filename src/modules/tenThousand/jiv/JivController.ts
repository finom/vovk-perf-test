import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jivs")
export default class JivController {
  @operation({
    summary: "Get Jivs",
  })
  @get()
  static getJivs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jiv",
  })
  @post("{id}")
  static createJiv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
