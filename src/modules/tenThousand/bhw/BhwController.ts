import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhws")
export default class BhwController {
  @operation({
    summary: "Get Bhws",
  })
  @get()
  static getBhws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bhw",
  })
  @post("{id}")
  static createBhw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
