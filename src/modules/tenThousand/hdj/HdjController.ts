import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdjs")
export default class HdjController {
  @operation({
    summary: "Get Hdjs",
  })
  @get()
  static getHdjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hdj",
  })
  @post("{id}")
  static createHdj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
