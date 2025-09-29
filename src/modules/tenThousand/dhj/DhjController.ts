import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhjs")
export default class DhjController {
  @operation({
    summary: "Get Dhjs",
  })
  @get()
  static getDhjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dhj",
  })
  @post("{id}")
  static createDhj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
