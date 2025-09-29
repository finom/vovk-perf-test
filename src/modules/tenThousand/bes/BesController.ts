import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bes")
export default class BesController {
  @operation({
    summary: "Get Bes",
  })
  @get()
  static getBes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bes",
  })
  @post("{id}")
  static createBes = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
