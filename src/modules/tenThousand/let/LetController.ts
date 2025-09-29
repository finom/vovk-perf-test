import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lets")
export default class LetController {
  @operation({
    summary: "Get Lets",
  })
  @get()
  static getLets = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Let",
  })
  @post("{id}")
  static createLet = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
