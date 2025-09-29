import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbfs")
export default class CbfController {
  @operation({
    summary: "Get Cbfs",
  })
  @get()
  static getCbfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cbf",
  })
  @post("{id}")
  static createCbf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
