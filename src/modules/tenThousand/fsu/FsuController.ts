import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fsus")
export default class FsuController {
  @operation({
    summary: "Get Fsus",
  })
  @get()
  static getFsus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fsu",
  })
  @post("{id}")
  static createFsu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
