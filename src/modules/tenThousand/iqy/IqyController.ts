import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqies")
export default class IqyController {
  @operation({
    summary: "Get Iqies",
  })
  @get()
  static getIqies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqy",
  })
  @post("{id}")
  static createIqy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
