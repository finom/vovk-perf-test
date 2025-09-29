import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejps")
export default class EjpController {
  @operation({
    summary: "Get Ejps",
  })
  @get()
  static getEjps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ejp",
  })
  @post("{id}")
  static createEjp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
