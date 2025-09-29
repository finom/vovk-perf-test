import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ipls")
export default class IplController {
  @operation({
    summary: "Get Ipls",
  })
  @get()
  static getIpls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ipl",
  })
  @post("{id}")
  static createIpl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
