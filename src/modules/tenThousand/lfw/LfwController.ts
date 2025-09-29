import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfws")
export default class LfwController {
  @operation({
    summary: "Get Lfws",
  })
  @get()
  static getLfws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lfw",
  })
  @post("{id}")
  static createLfw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
