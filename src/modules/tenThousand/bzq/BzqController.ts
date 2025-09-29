import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzqs")
export default class BzqController {
  @operation({
    summary: "Get Bzqs",
  })
  @get()
  static getBzqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzq",
  })
  @post("{id}")
  static createBzq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
