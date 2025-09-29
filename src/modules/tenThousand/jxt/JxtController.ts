import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxts")
export default class JxtController {
  @operation({
    summary: "Get Jxts",
  })
  @get()
  static getJxts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxt",
  })
  @post("{id}")
  static createJxt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
