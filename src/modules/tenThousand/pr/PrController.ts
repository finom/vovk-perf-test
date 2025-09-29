import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("prs")
export default class PrController {
  @operation({
    summary: "Get Prs",
  })
  @get()
  static getPrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Pr",
  })
  @post("{id}")
  static createPr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
