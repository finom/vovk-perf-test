import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dsos")
export default class DsoController {
  @operation({
    summary: "Get Dsos",
  })
  @get()
  static getDsos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dso",
  })
  @post("{id}")
  static createDso = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
