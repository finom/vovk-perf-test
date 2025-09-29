import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cs")
export default class CsController {
  @operation({
    summary: "Get Cs",
  })
  @get()
  static getCs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cs",
  })
  @post("{id}")
  static createCs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
