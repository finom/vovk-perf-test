import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dpus")
export default class DpuController {
  @operation({
    summary: "Get Dpus",
  })
  @get()
  static getDpus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dpu",
  })
  @post("{id}")
  static createDpu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
