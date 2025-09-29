import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gums")
export default class GumController {
  @operation({
    summary: "Get Gums",
  })
  @get()
  static getGums = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gum",
  })
  @post("{id}")
  static createGum = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
