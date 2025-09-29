import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("faws")
export default class FawController {
  @operation({
    summary: "Get Faws",
  })
  @get()
  static getFaws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Faw",
  })
  @post("{id}")
  static createFaw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
