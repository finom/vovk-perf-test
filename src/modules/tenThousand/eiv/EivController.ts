import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eivs")
export default class EivController {
  @operation({
    summary: "Get Eivs",
  })
  @get()
  static getEivs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eiv",
  })
  @post("{id}")
  static createEiv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
