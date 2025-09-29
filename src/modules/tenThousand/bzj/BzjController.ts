import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzjs")
export default class BzjController {
  @operation({
    summary: "Get Bzjs",
  })
  @get()
  static getBzjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzj",
  })
  @post("{id}")
  static createBzj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
