import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fcbs")
export default class FcbController {
  @operation({
    summary: "Get Fcbs",
  })
  @get()
  static getFcbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fcb",
  })
  @post("{id}")
  static createFcb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
