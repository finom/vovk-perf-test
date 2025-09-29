import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hljs")
export default class HljController {
  @operation({
    summary: "Get Hljs",
  })
  @get()
  static getHljs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hlj",
  })
  @post("{id}")
  static createHlj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
