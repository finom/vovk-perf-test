import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awps")
export default class AwpController {
  @operation({
    summary: "Get Awps",
  })
  @get()
  static getAwps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awp",
  })
  @post("{id}")
  static createAwp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
