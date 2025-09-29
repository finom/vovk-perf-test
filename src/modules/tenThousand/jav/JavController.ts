import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("javs")
export default class JavController {
  @operation({
    summary: "Get Javs",
  })
  @get()
  static getJavs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jav",
  })
  @post("{id}")
  static createJav = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
