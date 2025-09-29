import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmfs")
export default class LmfController {
  @operation({
    summary: "Get Lmfs",
  })
  @get()
  static getLmfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lmf",
  })
  @post("{id}")
  static createLmf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
