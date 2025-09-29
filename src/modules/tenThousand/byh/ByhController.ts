import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("byhs")
export default class ByhController {
  @operation({
    summary: "Get Byhs",
  })
  @get()
  static getByhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Byh",
  })
  @post("{id}")
  static createByh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
