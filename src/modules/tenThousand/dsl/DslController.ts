import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dsls")
export default class DslController {
  @operation({
    summary: "Get Dsls",
  })
  @get()
  static getDsls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dsl",
  })
  @post("{id}")
  static createDsl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
