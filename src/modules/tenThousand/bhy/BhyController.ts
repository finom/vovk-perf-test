import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhies")
export default class BhyController {
  @operation({
    summary: "Get Bhies",
  })
  @get()
  static getBhies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bhy",
  })
  @post("{id}")
  static createBhy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
