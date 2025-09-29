import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmfs")
export default class KmfController {
  @operation({
    summary: "Get Kmfs",
  })
  @get()
  static getKmfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kmf",
  })
  @post("{id}")
  static createKmf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
