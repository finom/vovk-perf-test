import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbjs")
export default class CbjController {
  @operation({
    summary: "Get Cbjs",
  })
  @get()
  static getCbjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cbj",
  })
  @post("{id}")
  static createCbj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
