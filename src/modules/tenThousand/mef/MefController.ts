import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mefs")
export default class MefController {
  @operation({
    summary: "Get Mefs",
  })
  @get()
  static getMefs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mef",
  })
  @post("{id}")
  static createMef = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
