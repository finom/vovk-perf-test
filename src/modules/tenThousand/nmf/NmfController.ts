import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmfs")
export default class NmfController {
  @operation({
    summary: "Get Nmfs",
  })
  @get()
  static getNmfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nmf",
  })
  @post("{id}")
  static createNmf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
