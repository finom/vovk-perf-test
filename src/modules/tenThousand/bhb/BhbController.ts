import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhbs")
export default class BhbController {
  @operation({
    summary: "Get Bhbs",
  })
  @get()
  static getBhbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bhb",
  })
  @post("{id}")
  static createBhb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
