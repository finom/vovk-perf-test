import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkds")
export default class NkdController {
  @operation({
    summary: "Get Nkds",
  })
  @get()
  static getNkds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nkd",
  })
  @post("{id}")
  static createNkd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
