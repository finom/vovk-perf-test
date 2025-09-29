import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdies")
export default class GdyController {
  @operation({
    summary: "Get Gdies",
  })
  @get()
  static getGdies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gdy",
  })
  @post("{id}")
  static createGdy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
