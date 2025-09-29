import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhms")
export default class JhmController {
  @operation({
    summary: "Get Jhms",
  })
  @get()
  static getJhms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jhm",
  })
  @post("{id}")
  static createJhm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
