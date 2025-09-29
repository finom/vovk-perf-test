import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkfs")
export default class GkfController {
  @operation({
    summary: "Get Gkfs",
  })
  @get()
  static getGkfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gkf",
  })
  @post("{id}")
  static createGkf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
