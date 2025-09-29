import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fcgs")
export default class FcgController {
  @operation({
    summary: "Get Fcgs",
  })
  @get()
  static getFcgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fcg",
  })
  @post("{id}")
  static createFcg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
