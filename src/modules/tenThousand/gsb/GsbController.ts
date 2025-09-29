import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gsbs")
export default class GsbController {
  @operation({
    summary: "Get Gsbs",
  })
  @get()
  static getGsbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gsb",
  })
  @post("{id}")
  static createGsb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
