import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwfs")
export default class MwfController {
  @operation({
    summary: "Get Mwfs",
  })
  @get()
  static getMwfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwf",
  })
  @post("{id}")
  static createMwf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
