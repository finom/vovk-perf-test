import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("oes")
export default class OeController {
  @operation({
    summary: "Get Oes",
  })
  @get()
  static getOes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Oe",
  })
  @post("{id}")
  static createOe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
