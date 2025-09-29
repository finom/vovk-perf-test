import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmls")
export default class HmlController {
  @operation({
    summary: "Get Hmls",
  })
  @get()
  static getHmls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hml",
  })
  @post("{id}")
  static createHml = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
