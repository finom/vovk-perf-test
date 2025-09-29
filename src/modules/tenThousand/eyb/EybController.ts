import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eybs")
export default class EybController {
  @operation({
    summary: "Get Eybs",
  })
  @get()
  static getEybs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eyb",
  })
  @post("{id}")
  static createEyb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
