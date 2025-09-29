import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfws")
export default class HfwController {
  @operation({
    summary: "Get Hfws",
  })
  @get()
  static getHfws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hfw",
  })
  @post("{id}")
  static createHfw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
