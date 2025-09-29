import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("pts")
export default class PtController {
  @operation({
    summary: "Get Pts",
  })
  @get()
  static getPts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Pt",
  })
  @post("{id}")
  static createPt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
