import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgies")
export default class FgyController {
  @operation({
    summary: "Get Fgies",
  })
  @get()
  static getFgies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgy",
  })
  @post("{id}")
  static createFgy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
