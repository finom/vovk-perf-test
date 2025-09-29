import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fpjs")
export default class FpjController {
  @operation({
    summary: "Get Fpjs",
  })
  @get()
  static getFpjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpj",
  })
  @post("{id}")
  static createFpj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
