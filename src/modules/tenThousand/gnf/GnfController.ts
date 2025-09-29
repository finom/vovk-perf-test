import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gnfs")
export default class GnfController {
  @operation({
    summary: "Get Gnfs",
  })
  @get()
  static getGnfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gnf",
  })
  @post("{id}")
  static createGnf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
