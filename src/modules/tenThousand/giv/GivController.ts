import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("givs")
export default class GivController {
  @operation({
    summary: "Get Givs",
  })
  @get()
  static getGivs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Giv",
  })
  @post("{id}")
  static createGiv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
