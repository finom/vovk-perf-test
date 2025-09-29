import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lacs")
export default class LacController {
  @operation({
    summary: "Get Lacs",
  })
  @get()
  static getLacs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lac",
  })
  @post("{id}")
  static createLac = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
