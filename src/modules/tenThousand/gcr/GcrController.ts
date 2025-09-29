import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gcrs")
export default class GcrController {
  @operation({
    summary: "Get Gcrs",
  })
  @get()
  static getGcrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gcr",
  })
  @post("{id}")
  static createGcr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
