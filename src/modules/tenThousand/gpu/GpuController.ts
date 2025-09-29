import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gpus")
export default class GpuController {
  @operation({
    summary: "Get Gpus",
  })
  @get()
  static getGpus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gpu",
  })
  @post("{id}")
  static createGpu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
