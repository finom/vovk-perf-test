import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmqs")
export default class DmqController {
  @operation({
    summary: "Get Dmqs",
  })
  @get()
  static getDmqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dmq",
  })
  @post("{id}")
  static createDmq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
