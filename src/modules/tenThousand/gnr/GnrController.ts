import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gnrs")
export default class GnrController {
  @operation({
    summary: "Get Gnrs",
  })
  @get()
  static getGnrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gnr",
  })
  @post("{id}")
  static createGnr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
