import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aups")
export default class AupController {
  @operation({
    summary: "Get Aups",
  })
  @get()
  static getAups = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aup",
  })
  @post("{id}")
  static createAup = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
