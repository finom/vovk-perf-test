import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mpfs")
export default class MpfController {
  @operation({
    summary: "Get Mpfs",
  })
  @get()
  static getMpfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpf",
  })
  @post("{id}")
  static createMpf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
