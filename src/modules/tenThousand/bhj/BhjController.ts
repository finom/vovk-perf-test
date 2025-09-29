import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhjs")
export default class BhjController {
  @operation({
    summary: "Get Bhjs",
  })
  @get()
  static getBhjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bhj",
  })
  @post("{id}")
  static createBhj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
