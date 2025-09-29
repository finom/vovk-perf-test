import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("amls")
export default class AmlController {
  @operation({
    summary: "Get Amls",
  })
  @get()
  static getAmls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aml",
  })
  @post("{id}")
  static createAml = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
