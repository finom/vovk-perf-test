import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("npfs")
export default class NpfController {
  @operation({
    summary: "Get Npfs",
  })
  @get()
  static getNpfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Npf",
  })
  @post("{id}")
  static createNpf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
