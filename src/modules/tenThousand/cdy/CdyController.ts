import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdies")
export default class CdyController {
  @operation({
    summary: "Get Cdies",
  })
  @get()
  static getCdies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cdy",
  })
  @post("{id}")
  static createCdy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
