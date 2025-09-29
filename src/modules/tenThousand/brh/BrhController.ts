import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("brhs")
export default class BrhController {
  @operation({
    summary: "Get Brhs",
  })
  @get()
  static getBrhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Brh",
  })
  @post("{id}")
  static createBrh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
