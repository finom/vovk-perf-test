import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kncs")
export default class KncController {
  @operation({
    summary: "Get Kncs",
  })
  @get()
  static getKncs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Knc",
  })
  @post("{id}")
  static createKnc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
