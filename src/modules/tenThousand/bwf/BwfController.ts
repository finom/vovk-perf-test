import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwfs")
export default class BwfController {
  @operation({
    summary: "Get Bwfs",
  })
  @get()
  static getBwfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bwf",
  })
  @post("{id}")
  static createBwf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
