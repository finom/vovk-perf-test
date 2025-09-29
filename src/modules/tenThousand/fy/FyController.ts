import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fies")
export default class FyController {
  @operation({
    summary: "Get Fies",
  })
  @get()
  static getFies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fy",
  })
  @post("{id}")
  static createFy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
