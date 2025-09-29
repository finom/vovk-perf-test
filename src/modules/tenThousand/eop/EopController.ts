import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eops")
export default class EopController {
  @operation({
    summary: "Get Eops",
  })
  @get()
  static getEops = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eop",
  })
  @post("{id}")
  static createEop = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
