import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fpus")
export default class FpuController {
  @operation({
    summary: "Get Fpus",
  })
  @get()
  static getFpus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpu",
  })
  @post("{id}")
  static createFpu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
