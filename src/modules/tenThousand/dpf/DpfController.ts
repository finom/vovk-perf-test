import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dpfs")
export default class DpfController {
  @operation({
    summary: "Get Dpfs",
  })
  @get()
  static getDpfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dpf",
  })
  @post("{id}")
  static createDpf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
