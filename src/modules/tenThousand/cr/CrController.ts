import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("crs")
export default class CrController {
  @operation({
    summary: "Get Crs",
  })
  @get()
  static getCrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cr",
  })
  @post("{id}")
  static createCr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
