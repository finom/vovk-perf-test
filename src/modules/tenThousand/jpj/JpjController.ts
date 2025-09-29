import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jpjs")
export default class JpjController {
  @operation({
    summary: "Get Jpjs",
  })
  @get()
  static getJpjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jpj",
  })
  @post("{id}")
  static createJpj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
