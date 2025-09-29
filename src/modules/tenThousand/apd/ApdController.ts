import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("apds")
export default class ApdController {
  @operation({
    summary: "Get Apds",
  })
  @get()
  static getApds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Apd",
  })
  @post("{id}")
  static createApd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
