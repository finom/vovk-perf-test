import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gpts")
export default class GptController {
  @operation({
    summary: "Get Gpts",
  })
  @get()
  static getGpts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gpt",
  })
  @post("{id}")
  static createGpt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
