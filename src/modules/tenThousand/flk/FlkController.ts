import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("flks")
export default class FlkController {
  @operation({
    summary: "Get Flks",
  })
  @get()
  static getFlks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Flk",
  })
  @post("{id}")
  static createFlk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
