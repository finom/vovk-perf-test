import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjqs")
export default class GjqController {
  @operation({
    summary: "Get Gjqs",
  })
  @get()
  static getGjqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gjq",
  })
  @post("{id}")
  static createGjq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
