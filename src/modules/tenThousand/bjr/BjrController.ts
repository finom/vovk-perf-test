import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjrs")
export default class BjrController {
  @operation({
    summary: "Get Bjrs",
  })
  @get()
  static getBjrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bjr",
  })
  @post("{id}")
  static createBjr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
