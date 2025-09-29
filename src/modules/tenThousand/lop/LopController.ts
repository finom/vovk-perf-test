import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lops")
export default class LopController {
  @operation({
    summary: "Get Lops",
  })
  @get()
  static getLops = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lop",
  })
  @post("{id}")
  static createLop = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
