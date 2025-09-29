import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjus")
export default class BjuController {
  @operation({
    summary: "Get Bjus",
  })
  @get()
  static getBjus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bju",
  })
  @post("{id}")
  static createBju = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
