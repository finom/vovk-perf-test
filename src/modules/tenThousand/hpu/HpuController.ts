import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hpus")
export default class HpuController {
  @operation({
    summary: "Get Hpus",
  })
  @get()
  static getHpus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hpu",
  })
  @post("{id}")
  static createHpu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
