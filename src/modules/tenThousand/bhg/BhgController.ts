import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhgs")
export default class BhgController {
  @operation({
    summary: "Get Bhgs",
  })
  @get()
  static getBhgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bhg",
  })
  @post("{id}")
  static createBhg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
