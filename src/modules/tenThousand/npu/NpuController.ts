import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("npus")
export default class NpuController {
  @operation({
    summary: "Get Npus",
  })
  @get()
  static getNpus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Npu",
  })
  @post("{id}")
  static createNpu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
