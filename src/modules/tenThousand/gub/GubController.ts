import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gubs")
export default class GubController {
  @operation({
    summary: "Get Gubs",
  })
  @get()
  static getGubs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gub",
  })
  @post("{id}")
  static createGub = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
