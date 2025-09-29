import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmls")
export default class DmlController {
  @operation({
    summary: "Get Dmls",
  })
  @get()
  static getDmls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dml",
  })
  @post("{id}")
  static createDml = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
