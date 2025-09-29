import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("epfs")
export default class EpfController {
  @operation({
    summary: "Get Epfs",
  })
  @get()
  static getEpfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Epf",
  })
  @post("{id}")
  static createEpf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
