import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwfs")
export default class CwfController {
  @operation({
    summary: "Get Cwfs",
  })
  @get()
  static getCwfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cwf",
  })
  @post("{id}")
  static createCwf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
