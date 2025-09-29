import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lsos")
export default class LsoController {
  @operation({
    summary: "Get Lsos",
  })
  @get()
  static getLsos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lso",
  })
  @post("{id}")
  static createLso = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
