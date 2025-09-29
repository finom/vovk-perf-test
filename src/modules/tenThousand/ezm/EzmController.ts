import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezms")
export default class EzmController {
  @operation({
    summary: "Get Ezms",
  })
  @get()
  static getEzms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ezm",
  })
  @post("{id}")
  static createEzm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
