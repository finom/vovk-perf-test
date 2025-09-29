import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljrs")
export default class LjrController {
  @operation({
    summary: "Get Ljrs",
  })
  @get()
  static getLjrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ljr",
  })
  @post("{id}")
  static createLjr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
