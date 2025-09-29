import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kovs")
export default class KovController {
  @operation({
    summary: "Get Kovs",
  })
  @get()
  static getKovs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kov",
  })
  @post("{id}")
  static createKov = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
