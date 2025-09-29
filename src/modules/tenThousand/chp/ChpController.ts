import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chps")
export default class ChpController {
  @operation({
    summary: "Get Chps",
  })
  @get()
  static getChps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Chp",
  })
  @post("{id}")
  static createChp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
