import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmqs")
export default class NmqController {
  @operation({
    summary: "Get Nmqs",
  })
  @get()
  static getNmqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nmq",
  })
  @post("{id}")
  static createNmq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
