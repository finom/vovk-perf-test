import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmqs")
export default class KmqController {
  @operation({
    summary: "Get Kmqs",
  })
  @get()
  static getKmqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kmq",
  })
  @post("{id}")
  static createKmq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
