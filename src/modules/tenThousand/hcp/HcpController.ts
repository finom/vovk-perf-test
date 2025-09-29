import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hcps")
export default class HcpController {
  @operation({
    summary: "Get Hcps",
  })
  @get()
  static getHcps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hcp",
  })
  @post("{id}")
  static createHcp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
