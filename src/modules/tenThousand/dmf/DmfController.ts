import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmfs")
export default class DmfController {
  @operation({
    summary: "Get Dmfs",
  })
  @get()
  static getDmfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dmf",
  })
  @post("{id}")
  static createDmf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
