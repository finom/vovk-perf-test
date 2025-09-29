import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqs")
export default class GqsController {
  @operation({
    summary: "Get Gqs",
  })
  @get()
  static getGqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqs",
  })
  @post("{id}")
  static createGqs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
