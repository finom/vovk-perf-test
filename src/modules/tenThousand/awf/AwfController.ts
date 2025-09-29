import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awfs")
export default class AwfController {
  @operation({
    summary: "Get Awfs",
  })
  @get()
  static getAwfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awf",
  })
  @post("{id}")
  static createAwf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
