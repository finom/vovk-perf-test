import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgds")
export default class MgdController {
  @operation({
    summary: "Get Mgds",
  })
  @get()
  static getMgds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgd",
  })
  @post("{id}")
  static createMgd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
