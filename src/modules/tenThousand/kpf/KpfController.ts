import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kpfs")
export default class KpfController {
  @operation({
    summary: "Get Kpfs",
  })
  @get()
  static getKpfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kpf",
  })
  @post("{id}")
  static createKpf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
