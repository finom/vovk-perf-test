import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ksds")
export default class KsdController {
  @operation({
    summary: "Get Ksds",
  })
  @get()
  static getKsds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ksd",
  })
  @post("{id}")
  static createKsd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
