import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmqs")
export default class CmqController {
  @operation({
    summary: "Get Cmqs",
  })
  @get()
  static getCmqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cmq",
  })
  @post("{id}")
  static createCmq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
