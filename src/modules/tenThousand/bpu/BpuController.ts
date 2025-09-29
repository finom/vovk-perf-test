import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bpus")
export default class BpuController {
  @operation({
    summary: "Get Bpus",
  })
  @get()
  static getBpus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bpu",
  })
  @post("{id}")
  static createBpu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
