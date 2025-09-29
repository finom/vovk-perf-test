import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwjs")
export default class LwjController {
  @operation({
    summary: "Get Lwjs",
  })
  @get()
  static getLwjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwj",
  })
  @post("{id}")
  static createLwj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
