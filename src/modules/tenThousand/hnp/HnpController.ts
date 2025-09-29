import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hnps")
export default class HnpController {
  @operation({
    summary: "Get Hnps",
  })
  @get()
  static getHnps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hnp",
  })
  @post("{id}")
  static createHnp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
