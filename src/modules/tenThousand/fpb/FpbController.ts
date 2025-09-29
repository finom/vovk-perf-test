import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fpbs")
export default class FpbController {
  @operation({
    summary: "Get Fpbs",
  })
  @get()
  static getFpbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpb",
  })
  @post("{id}")
  static createFpb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
