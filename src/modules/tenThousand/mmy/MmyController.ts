import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmies")
export default class MmyController {
  @operation({
    summary: "Get Mmies",
  })
  @get()
  static getMmies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mmy",
  })
  @post("{id}")
  static createMmy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
