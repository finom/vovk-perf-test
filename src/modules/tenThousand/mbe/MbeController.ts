import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbes")
export default class MbeController {
  @operation({
    summary: "Get Mbes",
  })
  @get()
  static getMbes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mbe",
  })
  @post("{id}")
  static createMbe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
