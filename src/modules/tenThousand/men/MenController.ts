import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("men")
export default class MenController {
  @operation({
    summary: "Get Men",
  })
  @get()
  static getMen = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Men",
  })
  @post("{id}")
  static createMen = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
