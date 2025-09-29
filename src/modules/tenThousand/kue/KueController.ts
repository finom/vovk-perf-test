import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kues")
export default class KueController {
  @operation({
    summary: "Get Kues",
  })
  @get()
  static getKues = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kue",
  })
  @post("{id}")
  static createKue = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
