import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvps")
export default class FvpController {
  @operation({
    summary: "Get Fvps",
  })
  @get()
  static getFvps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fvp",
  })
  @post("{id}")
  static createFvp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
