import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("klds")
export default class KldController {
  @operation({
    summary: "Get Klds",
  })
  @get()
  static getKlds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kld",
  })
  @post("{id}")
  static createKld = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
