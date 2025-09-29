import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqps")
export default class IqpController {
  @operation({
    summary: "Get Iqps",
  })
  @get()
  static getIqps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqp",
  })
  @post("{id}")
  static createIqp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
