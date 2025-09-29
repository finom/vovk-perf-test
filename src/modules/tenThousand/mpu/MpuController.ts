import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mpus")
export default class MpuController {
  @operation({
    summary: "Get Mpus",
  })
  @get()
  static getMpus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpu",
  })
  @post("{id}")
  static createMpu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
