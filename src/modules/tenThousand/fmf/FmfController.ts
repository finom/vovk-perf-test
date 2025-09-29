import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmfs")
export default class FmfController {
  @operation({
    summary: "Get Fmfs",
  })
  @get()
  static getFmfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fmf",
  })
  @post("{id}")
  static createFmf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
