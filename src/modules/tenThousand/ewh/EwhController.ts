import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewhs")
export default class EwhController {
  @operation({
    summary: "Get Ewhs",
  })
  @get()
  static getEwhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewh",
  })
  @post("{id}")
  static createEwh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
