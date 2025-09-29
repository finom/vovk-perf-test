import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hacs")
export default class HacController {
  @operation({
    summary: "Get Hacs",
  })
  @get()
  static getHacs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hac",
  })
  @post("{id}")
  static createHac = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
