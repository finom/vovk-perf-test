import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gccs")
export default class GccController {
  @operation({
    summary: "Get Gccs",
  })
  @get()
  static getGccs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gcc",
  })
  @post("{id}")
  static createGcc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
