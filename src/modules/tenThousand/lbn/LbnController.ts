import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbns")
export default class LbnController {
  @operation({
    summary: "Get Lbns",
  })
  @get()
  static getLbns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbn",
  })
  @post("{id}")
  static createLbn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
