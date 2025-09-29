import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chfs")
export default class ChfController {
  @operation({
    summary: "Get Chfs",
  })
  @get()
  static getChfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Chf",
  })
  @post("{id}")
  static createChf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
