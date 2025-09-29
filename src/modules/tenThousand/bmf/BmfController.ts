import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmfs")
export default class BmfController {
  @operation({
    summary: "Get Bmfs",
  })
  @get()
  static getBmfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bmf",
  })
  @post("{id}")
  static createBmf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
