import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aubs")
export default class AubController {
  @operation({
    summary: "Get Aubs",
  })
  @get()
  static getAubs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aub",
  })
  @post("{id}")
  static createAub = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
