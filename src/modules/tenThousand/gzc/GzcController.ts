import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzcs")
export default class GzcController {
  @operation({
    summary: "Get Gzcs",
  })
  @get()
  static getGzcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzc",
  })
  @post("{id}")
  static createGzc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
