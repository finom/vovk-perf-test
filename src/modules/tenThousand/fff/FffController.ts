import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fffs")
export default class FffController {
  @operation({
    summary: "Get Fffs",
  })
  @get()
  static getFffs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fff",
  })
  @post("{id}")
  static createFff = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
