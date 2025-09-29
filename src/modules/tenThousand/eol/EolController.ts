import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eols")
export default class EolController {
  @operation({
    summary: "Get Eols",
  })
  @get()
  static getEols = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eol",
  })
  @post("{id}")
  static createEol = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
