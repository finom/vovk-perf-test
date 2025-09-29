import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ipms")
export default class IpmController {
  @operation({
    summary: "Get Ipms",
  })
  @get()
  static getIpms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ipm",
  })
  @post("{id}")
  static createIpm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
