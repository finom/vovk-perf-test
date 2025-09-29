import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fpds")
export default class FpdController {
  @operation({
    summary: "Get Fpds",
  })
  @get()
  static getFpds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpd",
  })
  @post("{id}")
  static createFpd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
