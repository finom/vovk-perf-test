import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("myjs")
export default class MyjController {
  @operation({
    summary: "Get Myjs",
  })
  @get()
  static getMyjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Myj",
  })
  @post("{id}")
  static createMyj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
