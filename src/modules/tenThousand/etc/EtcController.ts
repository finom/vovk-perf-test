import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("etcs")
export default class EtcController {
  @operation({
    summary: "Get Etcs",
  })
  @get()
  static getEtcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Etc",
  })
  @post("{id}")
  static createEtc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
