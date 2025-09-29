import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqls")
export default class KqlController {
  @operation({
    summary: "Get Kqls",
  })
  @get()
  static getKqls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kql",
  })
  @post("{id}")
  static createKql = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
