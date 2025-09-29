import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("yds")
export default class YdController {
  @operation({
    summary: "Get Yds",
  })
  @get()
  static getYds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Yd",
  })
  @post("{id}")
  static createYd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
