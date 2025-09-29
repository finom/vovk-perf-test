import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzies")
export default class BzyController {
  @operation({
    summary: "Get Bzies",
  })
  @get()
  static getBzies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzy",
  })
  @post("{id}")
  static createBzy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
