import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cems")
export default class CemController {
  @operation({
    summary: "Get Cems",
  })
  @get()
  static getCems = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cem",
  })
  @post("{id}")
  static createCem = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
