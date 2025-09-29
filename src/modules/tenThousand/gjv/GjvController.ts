import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjvs")
export default class GjvController {
  @operation({
    summary: "Get Gjvs",
  })
  @get()
  static getGjvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gjv",
  })
  @post("{id}")
  static createGjv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
