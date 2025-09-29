import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dces")
export default class DceController {
  @operation({
    summary: "Get Dces",
  })
  @get()
  static getDces = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dce",
  })
  @post("{id}")
  static createDce = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
