import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqcs")
export default class JqcController {
  @operation({
    summary: "Get Jqcs",
  })
  @get()
  static getJqcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqc",
  })
  @post("{id}")
  static createJqc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
