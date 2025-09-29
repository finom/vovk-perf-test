import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gnps")
export default class GnpController {
  @operation({
    summary: "Get Gnps",
  })
  @get()
  static getGnps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gnp",
  })
  @post("{id}")
  static createGnp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
