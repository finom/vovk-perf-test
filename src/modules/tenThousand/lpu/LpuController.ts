import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lpus")
export default class LpuController {
  @operation({
    summary: "Get Lpus",
  })
  @get()
  static getLpus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lpu",
  })
  @post("{id}")
  static createLpu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
