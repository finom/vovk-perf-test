import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdies")
export default class HdyController {
  @operation({
    summary: "Get Hdies",
  })
  @get()
  static getHdies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hdy",
  })
  @post("{id}")
  static createHdy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
