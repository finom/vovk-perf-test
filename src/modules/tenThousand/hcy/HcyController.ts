import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hcies")
export default class HcyController {
  @operation({
    summary: "Get Hcies",
  })
  @get()
  static getHcies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hcy",
  })
  @post("{id}")
  static createHcy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
