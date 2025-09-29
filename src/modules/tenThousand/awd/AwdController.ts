import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awds")
export default class AwdController {
  @operation({
    summary: "Get Awds",
  })
  @get()
  static getAwds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awd",
  })
  @post("{id}")
  static createAwd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
