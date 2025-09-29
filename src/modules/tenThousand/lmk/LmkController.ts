import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmks")
export default class LmkController {
  @operation({
    summary: "Get Lmks",
  })
  @get()
  static getLmks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lmk",
  })
  @post("{id}")
  static createLmk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
