import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwhs")
export default class KwhController {
  @operation({
    summary: "Get Kwhs",
  })
  @get()
  static getKwhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwh",
  })
  @post("{id}")
  static createKwh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
