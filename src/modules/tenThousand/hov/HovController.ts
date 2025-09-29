import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hovs")
export default class HovController {
  @operation({
    summary: "Get Hovs",
  })
  @get()
  static getHovs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hov",
  })
  @post("{id}")
  static createHov = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
