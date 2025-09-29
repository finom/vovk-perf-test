import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hsks")
export default class HskController {
  @operation({
    summary: "Get Hsks",
  })
  @get()
  static getHsks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hsk",
  })
  @post("{id}")
  static createHsk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
