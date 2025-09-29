import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffws")
export default class FfwController {
  @operation({
    summary: "Get Ffws",
  })
  @get()
  static getFfws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffw",
  })
  @post("{id}")
  static createFfw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
