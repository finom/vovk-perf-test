import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hids")
export default class HidController {
  @operation({
    summary: "Get Hids",
  })
  @get()
  static getHids = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hid",
  })
  @post("{id}")
  static createHid = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
