import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmqs")
export default class JmqController {
  @operation({
    summary: "Get Jmqs",
  })
  @get()
  static getJmqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jmq",
  })
  @post("{id}")
  static createJmq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
