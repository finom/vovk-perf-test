import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hcns")
export default class HcnController {
  @operation({
    summary: "Get Hcns",
  })
  @get()
  static getHcns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hcn",
  })
  @post("{id}")
  static createHcn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
