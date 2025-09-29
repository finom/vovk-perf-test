import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwhs")
export default class HwhController {
  @operation({
    summary: "Get Hwhs",
  })
  @get()
  static getHwhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hwh",
  })
  @post("{id}")
  static createHwh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
