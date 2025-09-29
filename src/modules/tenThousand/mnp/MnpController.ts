import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mnps")
export default class MnpController {
  @operation({
    summary: "Get Mnps",
  })
  @get()
  static getMnps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mnp",
  })
  @post("{id}")
  static createMnp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
