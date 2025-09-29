import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxcs")
export default class HxcController {
  @operation({
    summary: "Get Hxcs",
  })
  @get()
  static getHxcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxc",
  })
  @post("{id}")
  static createHxc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
