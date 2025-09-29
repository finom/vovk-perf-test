import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("meps")
export default class MepController {
  @operation({
    summary: "Get Meps",
  })
  @get()
  static getMeps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mep",
  })
  @post("{id}")
  static createMep = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
