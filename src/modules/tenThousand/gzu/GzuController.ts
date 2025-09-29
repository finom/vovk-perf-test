import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzus")
export default class GzuController {
  @operation({
    summary: "Get Gzus",
  })
  @get()
  static getGzus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzu",
  })
  @post("{id}")
  static createGzu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
