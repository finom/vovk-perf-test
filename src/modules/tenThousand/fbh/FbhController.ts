import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbhs")
export default class FbhController {
  @operation({
    summary: "Get Fbhs",
  })
  @get()
  static getFbhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbh",
  })
  @post("{id}")
  static createFbh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
