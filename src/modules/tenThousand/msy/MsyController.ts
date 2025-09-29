import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("msies")
export default class MsyController {
  @operation({
    summary: "Get Msies",
  })
  @get()
  static getMsies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Msy",
  })
  @post("{id}")
  static createMsy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
