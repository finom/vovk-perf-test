import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmies")
export default class CmyController {
  @operation({
    summary: "Get Cmies",
  })
  @get()
  static getCmies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cmy",
  })
  @post("{id}")
  static createCmy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
