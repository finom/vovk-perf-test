import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dpbs")
export default class DpbController {
  @operation({
    summary: "Get Dpbs",
  })
  @get()
  static getDpbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dpb",
  })
  @post("{id}")
  static createDpb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
