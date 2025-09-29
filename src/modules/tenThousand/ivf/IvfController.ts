import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivfs")
export default class IvfController {
  @operation({
    summary: "Get Ivfs",
  })
  @get()
  static getIvfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivf",
  })
  @post("{id}")
  static createIvf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
