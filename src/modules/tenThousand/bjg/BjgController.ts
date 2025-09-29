import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjgs")
export default class BjgController {
  @operation({
    summary: "Get Bjgs",
  })
  @get()
  static getBjgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bjg",
  })
  @post("{id}")
  static createBjg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
