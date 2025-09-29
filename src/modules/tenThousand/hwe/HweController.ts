import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwes")
export default class HweController {
  @operation({
    summary: "Get Hwes",
  })
  @get()
  static getHwes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hwe",
  })
  @post("{id}")
  static createHwe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
