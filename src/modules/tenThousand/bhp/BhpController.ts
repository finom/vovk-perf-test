import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhps")
export default class BhpController {
  @operation({
    summary: "Get Bhps",
  })
  @get()
  static getBhps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bhp",
  })
  @post("{id}")
  static createBhp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
