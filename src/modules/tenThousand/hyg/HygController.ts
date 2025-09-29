import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hygs")
export default class HygController {
  @operation({
    summary: "Get Hygs",
  })
  @get()
  static getHygs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hyg",
  })
  @post("{id}")
  static createHyg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
