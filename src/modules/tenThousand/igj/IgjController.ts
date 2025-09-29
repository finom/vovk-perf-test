import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("igjs")
export default class IgjController {
  @operation({
    summary: "Get Igjs",
  })
  @get()
  static getIgjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Igj",
  })
  @post("{id}")
  static createIgj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
