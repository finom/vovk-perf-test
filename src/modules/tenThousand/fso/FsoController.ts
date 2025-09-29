import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fsos")
export default class FsoController {
  @operation({
    summary: "Get Fsos",
  })
  @get()
  static getFsos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fso",
  })
  @post("{id}")
  static createFso = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
