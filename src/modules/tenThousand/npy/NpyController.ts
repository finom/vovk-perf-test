import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("npies")
export default class NpyController {
  @operation({
    summary: "Get Npies",
  })
  @get()
  static getNpies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Npy",
  })
  @post("{id}")
  static createNpy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
