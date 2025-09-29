import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kpus")
export default class KpuController {
  @operation({
    summary: "Get Kpus",
  })
  @get()
  static getKpus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kpu",
  })
  @post("{id}")
  static createKpu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
