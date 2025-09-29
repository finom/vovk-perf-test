import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjds")
export default class BjdController {
  @operation({
    summary: "Get Bjds",
  })
  @get()
  static getBjds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bjd",
  })
  @post("{id}")
  static createBjd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
