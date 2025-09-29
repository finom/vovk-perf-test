import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awgs")
export default class AwgController {
  @operation({
    summary: "Get Awgs",
  })
  @get()
  static getAwgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awg",
  })
  @post("{id}")
  static createAwg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
