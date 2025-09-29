import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kpcs")
export default class KpcController {
  @operation({
    summary: "Get Kpcs",
  })
  @get()
  static getKpcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kpc",
  })
  @post("{id}")
  static createKpc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
