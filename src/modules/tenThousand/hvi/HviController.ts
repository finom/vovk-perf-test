import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hvis")
export default class HviController {
  @operation({
    summary: "Get Hvis",
  })
  @get()
  static getHvis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hvi",
  })
  @post("{id}")
  static createHvi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
