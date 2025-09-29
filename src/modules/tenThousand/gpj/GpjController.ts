import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gpjs")
export default class GpjController {
  @operation({
    summary: "Get Gpjs",
  })
  @get()
  static getGpjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gpj",
  })
  @post("{id}")
  static createGpj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
