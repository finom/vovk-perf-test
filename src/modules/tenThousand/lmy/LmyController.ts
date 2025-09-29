import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmies")
export default class LmyController {
  @operation({
    summary: "Get Lmies",
  })
  @get()
  static getLmies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lmy",
  })
  @post("{id}")
  static createLmy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
