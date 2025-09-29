import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gnms")
export default class GnmController {
  @operation({
    summary: "Get Gnms",
  })
  @get()
  static getGnms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gnm",
  })
  @post("{id}")
  static createGnm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
