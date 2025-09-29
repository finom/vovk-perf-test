import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("enrs")
export default class EnrController {
  @operation({
    summary: "Get Enrs",
  })
  @get()
  static getEnrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Enr",
  })
  @post("{id}")
  static createEnr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
