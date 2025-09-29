import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmds")
export default class KmdController {
  @operation({
    summary: "Get Kmds",
  })
  @get()
  static getKmds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kmd",
  })
  @post("{id}")
  static createKmd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
