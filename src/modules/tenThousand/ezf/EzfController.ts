import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezfs")
export default class EzfController {
  @operation({
    summary: "Get Ezfs",
  })
  @get()
  static getEzfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ezf",
  })
  @post("{id}")
  static createEzf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
