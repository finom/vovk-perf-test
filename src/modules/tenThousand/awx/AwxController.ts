import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awxes")
export default class AwxController {
  @operation({
    summary: "Get Awxes",
  })
  @get()
  static getAwxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awx",
  })
  @post("{id}")
  static createAwx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
