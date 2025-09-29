import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvms")
export default class KvmController {
  @operation({
    summary: "Get Kvms",
  })
  @get()
  static getKvms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvm",
  })
  @post("{id}")
  static createKvm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
