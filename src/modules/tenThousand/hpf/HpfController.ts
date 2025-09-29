import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hpfs")
export default class HpfController {
  @operation({
    summary: "Get Hpfs",
  })
  @get()
  static getHpfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hpf",
  })
  @post("{id}")
  static createHpf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
