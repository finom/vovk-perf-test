import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azms")
export default class AzmController {
  @operation({
    summary: "Get Azms",
  })
  @get()
  static getAzms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azm",
  })
  @post("{id}")
  static createAzm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
