import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdhs")
export default class BdhController {
  @operation({
    summary: "Get Bdhs",
  })
  @get()
  static getBdhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bdh",
  })
  @post("{id}")
  static createBdh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
