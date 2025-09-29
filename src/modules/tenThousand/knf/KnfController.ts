import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("knfs")
export default class KnfController {
  @operation({
    summary: "Get Knfs",
  })
  @get()
  static getKnfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Knf",
  })
  @post("{id}")
  static createKnf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
