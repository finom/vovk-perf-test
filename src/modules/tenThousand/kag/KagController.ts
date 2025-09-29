import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kags")
export default class KagController {
  @operation({
    summary: "Get Kags",
  })
  @get()
  static getKags = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kag",
  })
  @post("{id}")
  static createKag = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
