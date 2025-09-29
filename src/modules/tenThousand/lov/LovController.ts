import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lovs")
export default class LovController {
  @operation({
    summary: "Get Lovs",
  })
  @get()
  static getLovs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lov",
  })
  @post("{id}")
  static createLov = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
