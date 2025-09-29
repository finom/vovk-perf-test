import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzts")
export default class GztController {
  @operation({
    summary: "Get Gzts",
  })
  @get()
  static getGzts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzt",
  })
  @post("{id}")
  static createGzt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
