import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hhies")
export default class HhyController {
  @operation({
    summary: "Get Hhies",
  })
  @get()
  static getHhies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hhy",
  })
  @post("{id}")
  static createHhy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
