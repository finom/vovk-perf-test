import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("apms")
export default class ApmController {
  @operation({
    summary: "Get Apms",
  })
  @get()
  static getApms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Apm",
  })
  @post("{id}")
  static createApm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
