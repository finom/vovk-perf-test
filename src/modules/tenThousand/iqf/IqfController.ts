import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqfs")
export default class IqfController {
  @operation({
    summary: "Get Iqfs",
  })
  @get()
  static getIqfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqf",
  })
  @post("{id}")
  static createIqf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
