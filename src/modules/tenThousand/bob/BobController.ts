import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bobs")
export default class BobController {
  @operation({
    summary: "Get Bobs",
  })
  @get()
  static getBobs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bob",
  })
  @post("{id}")
  static createBob = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
