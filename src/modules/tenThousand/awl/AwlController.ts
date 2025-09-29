import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awls")
export default class AwlController {
  @operation({
    summary: "Get Awls",
  })
  @get()
  static getAwls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awl",
  })
  @post("{id}")
  static createAwl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
