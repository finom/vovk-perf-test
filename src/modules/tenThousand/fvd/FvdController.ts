import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvds")
export default class FvdController {
  @operation({
    summary: "Get Fvds",
  })
  @get()
  static getFvds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fvd",
  })
  @post("{id}")
  static createFvd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
