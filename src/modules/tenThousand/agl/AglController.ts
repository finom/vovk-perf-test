import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("agls")
export default class AglController {
  @operation({
    summary: "Get Agls",
  })
  @get()
  static getAgls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Agl",
  })
  @post("{id}")
  static createAgl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
