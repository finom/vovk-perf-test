import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("etps")
export default class EtpController {
  @operation({
    summary: "Get Etps",
  })
  @get()
  static getEtps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Etp",
  })
  @post("{id}")
  static createEtp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
