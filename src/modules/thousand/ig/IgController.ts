import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("igs")
export default class IgController {
  @operation({
    summary: "Get Igs",
  })
  @get()
  static getIgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ig",
  })
  @post("{id}")
  static createIg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
