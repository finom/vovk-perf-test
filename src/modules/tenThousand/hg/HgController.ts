import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hgs")
export default class HgController {
  @operation({
    summary: "Get Hgs",
  })
  @get()
  static getHgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hg",
  })
  @post("{id}")
  static createHg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
