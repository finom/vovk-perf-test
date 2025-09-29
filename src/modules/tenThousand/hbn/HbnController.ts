import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbns")
export default class HbnController {
  @operation({
    summary: "Get Hbns",
  })
  @get()
  static getHbns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hbn",
  })
  @post("{id}")
  static createHbn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
