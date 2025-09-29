import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nnps")
export default class NnpController {
  @operation({
    summary: "Get Nnps",
  })
  @get()
  static getNnps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nnp",
  })
  @post("{id}")
  static createNnp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
