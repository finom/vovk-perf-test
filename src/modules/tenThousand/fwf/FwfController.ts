import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwfs")
export default class FwfController {
  @operation({
    summary: "Get Fwfs",
  })
  @get()
  static getFwfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwf",
  })
  @post("{id}")
  static createFwf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
