import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzgs")
export default class GzgController {
  @operation({
    summary: "Get Gzgs",
  })
  @get()
  static getGzgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzg",
  })
  @post("{id}")
  static createGzg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
