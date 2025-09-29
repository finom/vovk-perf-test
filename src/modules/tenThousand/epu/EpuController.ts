import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("epus")
export default class EpuController {
  @operation({
    summary: "Get Epus",
  })
  @get()
  static getEpus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Epu",
  })
  @post("{id}")
  static createEpu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
