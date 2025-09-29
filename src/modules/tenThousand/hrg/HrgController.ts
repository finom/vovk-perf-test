import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hrgs")
export default class HrgController {
  @operation({
    summary: "Get Hrgs",
  })
  @get()
  static getHrgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hrg",
  })
  @post("{id}")
  static createHrg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
