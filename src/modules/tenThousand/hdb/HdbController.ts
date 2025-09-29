import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdbs")
export default class HdbController {
  @operation({
    summary: "Get Hdbs",
  })
  @get()
  static getHdbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hdb",
  })
  @post("{id}")
  static createHdb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
