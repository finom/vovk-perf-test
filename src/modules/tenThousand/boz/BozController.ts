import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bozs")
export default class BozController {
  @operation({
    summary: "Get Bozs",
  })
  @get()
  static getBozs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Boz",
  })
  @post("{id}")
  static createBoz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
