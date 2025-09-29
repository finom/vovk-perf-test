import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dnts")
export default class DntController {
  @operation({
    summary: "Get Dnts",
  })
  @get()
  static getDnts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dnt",
  })
  @post("{id}")
  static createDnt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
