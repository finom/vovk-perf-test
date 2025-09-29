import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("isses")
export default class IssController {
  @operation({
    summary: "Get Isses",
  })
  @get()
  static getIsses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iss",
  })
  @post("{id}")
  static createIss = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
