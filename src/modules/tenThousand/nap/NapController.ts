import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("naps")
export default class NapController {
  @operation({
    summary: "Get Naps",
  })
  @get()
  static getNaps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nap",
  })
  @post("{id}")
  static createNap = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
