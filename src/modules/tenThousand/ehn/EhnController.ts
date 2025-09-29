import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehns")
export default class EhnController {
  @operation({
    summary: "Get Ehns",
  })
  @get()
  static getEhns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ehn",
  })
  @post("{id}")
  static createEhn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
