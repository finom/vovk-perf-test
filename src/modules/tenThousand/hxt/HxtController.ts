import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxts")
export default class HxtController {
  @operation({
    summary: "Get Hxts",
  })
  @get()
  static getHxts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxt",
  })
  @post("{id}")
  static createHxt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
