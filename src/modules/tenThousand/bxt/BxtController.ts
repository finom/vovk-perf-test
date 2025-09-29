import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxts")
export default class BxtController {
  @operation({
    summary: "Get Bxts",
  })
  @get()
  static getBxts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxt",
  })
  @post("{id}")
  static createBxt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
