import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjbs")
export default class BjbController {
  @operation({
    summary: "Get Bjbs",
  })
  @get()
  static getBjbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bjb",
  })
  @post("{id}")
  static createBjb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
