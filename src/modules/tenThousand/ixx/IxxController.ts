import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixxes")
export default class IxxController {
  @operation({
    summary: "Get Ixxes",
  })
  @get()
  static getIxxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixx",
  })
  @post("{id}")
  static createIxx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
