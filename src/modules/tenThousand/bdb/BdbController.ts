import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdbs")
export default class BdbController {
  @operation({
    summary: "Get Bdbs",
  })
  @get()
  static getBdbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bdb",
  })
  @post("{id}")
  static createBdb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
