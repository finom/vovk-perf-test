import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqies")
export default class CqyController {
  @operation({
    summary: "Get Cqies",
  })
  @get()
  static getCqies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqy",
  })
  @post("{id}")
  static createCqy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
