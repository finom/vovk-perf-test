import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lms")
export default class LmController {
  @operation({
    summary: "Get Lms",
  })
  @get()
  static getLms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lm",
  })
  @post("{id}")
  static createLm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
