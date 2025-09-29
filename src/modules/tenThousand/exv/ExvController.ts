import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("exvs")
export default class ExvController {
  @operation({
    summary: "Get Exvs",
  })
  @get()
  static getExvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Exv",
  })
  @post("{id}")
  static createExv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
