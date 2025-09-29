import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmqs")
export default class HmqController {
  @operation({
    summary: "Get Hmqs",
  })
  @get()
  static getHmqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hmq",
  })
  @post("{id}")
  static createHmq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
