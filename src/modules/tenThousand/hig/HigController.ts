import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("higs")
export default class HigController {
  @operation({
    summary: "Get Higs",
  })
  @get()
  static getHigs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hig",
  })
  @post("{id}")
  static createHig = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
