import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fnps")
export default class FnpController {
  @operation({
    summary: "Get Fnps",
  })
  @get()
  static getFnps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fnp",
  })
  @post("{id}")
  static createFnp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
