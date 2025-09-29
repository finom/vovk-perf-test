import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("emds")
export default class EmdController {
  @operation({
    summary: "Get Emds",
  })
  @get()
  static getEmds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Emd",
  })
  @post("{id}")
  static createEmd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
