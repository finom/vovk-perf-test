import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("isps")
export default class IspController {
  @operation({
    summary: "Get Isps",
  })
  @get()
  static getIsps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Isp",
  })
  @post("{id}")
  static createIsp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
