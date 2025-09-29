import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ftks")
export default class FtkController {
  @operation({
    summary: "Get Ftks",
  })
  @get()
  static getFtks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ftk",
  })
  @post("{id}")
  static createFtk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
