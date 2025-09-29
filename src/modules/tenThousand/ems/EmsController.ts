import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ems")
export default class EmsController {
  @operation({
    summary: "Get Ems",
  })
  @get()
  static getEms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ems",
  })
  @post("{id}")
  static createEms = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
