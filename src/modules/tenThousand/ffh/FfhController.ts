import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffhs")
export default class FfhController {
  @operation({
    summary: "Get Ffhs",
  })
  @get()
  static getFfhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffh",
  })
  @post("{id}")
  static createFfh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
