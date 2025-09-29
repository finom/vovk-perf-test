import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmqs")
export default class GmqController {
  @operation({
    summary: "Get Gmqs",
  })
  @get()
  static getGmqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gmq",
  })
  @post("{id}")
  static createGmq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
