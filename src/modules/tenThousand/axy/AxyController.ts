import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axies")
export default class AxyController {
  @operation({
    summary: "Get Axies",
  })
  @get()
  static getAxies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axy",
  })
  @post("{id}")
  static createAxy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
