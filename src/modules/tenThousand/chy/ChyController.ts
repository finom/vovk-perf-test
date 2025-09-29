import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chies")
export default class ChyController {
  @operation({
    summary: "Get Chies",
  })
  @get()
  static getChies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Chy",
  })
  @post("{id}")
  static createChy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
