import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbns")
export default class JbnController {
  @operation({
    summary: "Get Jbns",
  })
  @get()
  static getJbns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbn",
  })
  @post("{id}")
  static createJbn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
