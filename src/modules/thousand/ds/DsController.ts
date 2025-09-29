import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ds")
export default class DsController {
  @operation({
    summary: "Get Ds",
  })
  @get()
  static getDs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ds",
  })
  @post("{id}")
  static createDs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
