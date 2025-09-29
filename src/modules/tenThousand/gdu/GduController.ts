import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdus")
export default class GduController {
  @operation({
    summary: "Get Gdus",
  })
  @get()
  static getGdus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gdu",
  })
  @post("{id}")
  static createGdu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
