import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjies")
export default class BjyController {
  @operation({
    summary: "Get Bjies",
  })
  @get()
  static getBjies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bjy",
  })
  @post("{id}")
  static createBjy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
