import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("grms")
export default class GrmController {
  @operation({
    summary: "Get Grms",
  })
  @get()
  static getGrms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Grm",
  })
  @post("{id}")
  static createGrm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
