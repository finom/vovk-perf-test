import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bpfs")
export default class BpfController {
  @operation({
    summary: "Get Bpfs",
  })
  @get()
  static getBpfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bpf",
  })
  @post("{id}")
  static createBpf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
