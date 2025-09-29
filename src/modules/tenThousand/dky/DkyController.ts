import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkies")
export default class DkyController {
  @operation({
    summary: "Get Dkies",
  })
  @get()
  static getDkies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dky",
  })
  @post("{id}")
  static createDky = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
