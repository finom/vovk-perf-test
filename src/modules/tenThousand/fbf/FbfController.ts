import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbfs")
export default class FbfController {
  @operation({
    summary: "Get Fbfs",
  })
  @get()
  static getFbfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbf",
  })
  @post("{id}")
  static createFbf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
