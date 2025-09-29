import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbqs")
export default class FbqController {
  @operation({
    summary: "Get Fbqs",
  })
  @get()
  static getFbqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbq",
  })
  @post("{id}")
  static createFbq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
