import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmfs")
export default class MmfController {
  @operation({
    summary: "Get Mmfs",
  })
  @get()
  static getMmfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mmf",
  })
  @post("{id}")
  static createMmf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
