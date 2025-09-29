import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjcs")
export default class BjcController {
  @operation({
    summary: "Get Bjcs",
  })
  @get()
  static getBjcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bjc",
  })
  @post("{id}")
  static createBjc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
