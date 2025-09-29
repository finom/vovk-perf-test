import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gaus")
export default class GauController {
  @operation({
    summary: "Get Gaus",
  })
  @get()
  static getGaus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gau",
  })
  @post("{id}")
  static createGau = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
