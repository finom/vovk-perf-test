import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lpfs")
export default class LpfController {
  @operation({
    summary: "Get Lpfs",
  })
  @get()
  static getLpfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lpf",
  })
  @post("{id}")
  static createLpf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
