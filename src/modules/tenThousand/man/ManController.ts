import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("men")
export default class ManController {
  @operation({
    summary: "Get Men",
  })
  @get()
  static getMen = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Man",
  })
  @post("{id}")
  static createMan = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
