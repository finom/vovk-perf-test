import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbns")
export default class KbnController {
  @operation({
    summary: "Get Kbns",
  })
  @get()
  static getKbns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kbn",
  })
  @post("{id}")
  static createKbn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
