import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwfs")
export default class GwfController {
  @operation({
    summary: "Get Gwfs",
  })
  @get()
  static getGwfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwf",
  })
  @post("{id}")
  static createGwf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
