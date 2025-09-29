import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmds")
export default class JmdController {
  @operation({
    summary: "Get Jmds",
  })
  @get()
  static getJmds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jmd",
  })
  @post("{id}")
  static createJmd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
