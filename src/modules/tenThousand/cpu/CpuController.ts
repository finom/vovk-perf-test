import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cpus")
export default class CpuController {
  @operation({
    summary: "Get Cpus",
  })
  @get()
  static getCpus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cpu",
  })
  @post("{id}")
  static createCpu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
