import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lies")
export default class LyController {
  @operation({
    summary: "Get Lies",
  })
  @get()
  static getLies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ly",
  })
  @post("{id}")
  static createLy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
