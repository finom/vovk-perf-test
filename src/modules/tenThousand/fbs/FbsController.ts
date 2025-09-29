import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbs")
export default class FbsController {
  @operation({
    summary: "Get Fbs",
  })
  @get()
  static getFbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbs",
  })
  @post("{id}")
  static createFbs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
