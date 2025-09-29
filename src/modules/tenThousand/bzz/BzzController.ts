import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzzes")
export default class BzzController {
  @operation({
    summary: "Get Bzzes",
  })
  @get()
  static getBzzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzz",
  })
  @post("{id}")
  static createBzz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
