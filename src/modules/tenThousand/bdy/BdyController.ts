import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdies")
export default class BdyController {
  @operation({
    summary: "Get Bdies",
  })
  @get()
  static getBdies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bdy",
  })
  @post("{id}")
  static createBdy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
