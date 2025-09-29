import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("srs")
export default class SrController {
  @operation({
    summary: "Get Srs",
  })
  @get()
  static getSrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Sr",
  })
  @post("{id}")
  static createSr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
