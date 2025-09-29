import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nxes")
export default class NxController {
  @operation({
    summary: "Get Nxes",
  })
  @get()
  static getNxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nx",
  })
  @post("{id}")
  static createNx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
