import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lews")
export default class LewController {
  @operation({
    summary: "Get Lews",
  })
  @get()
  static getLews = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lew",
  })
  @post("{id}")
  static createLew = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
