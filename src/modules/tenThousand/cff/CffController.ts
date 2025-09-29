import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cffs")
export default class CffController {
  @operation({
    summary: "Get Cffs",
  })
  @get()
  static getCffs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cff",
  })
  @post("{id}")
  static createCff = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
