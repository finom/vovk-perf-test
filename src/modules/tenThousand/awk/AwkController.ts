import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awks")
export default class AwkController {
  @operation({
    summary: "Get Awks",
  })
  @get()
  static getAwks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awk",
  })
  @post("{id}")
  static createAwk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
