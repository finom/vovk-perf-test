import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cnps")
export default class CnpController {
  @operation({
    summary: "Get Cnps",
  })
  @get()
  static getCnps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cnp",
  })
  @post("{id}")
  static createCnp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
