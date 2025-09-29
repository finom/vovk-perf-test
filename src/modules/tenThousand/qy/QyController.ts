import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qies")
export default class QyController {
  @operation({
    summary: "Get Qies",
  })
  @get()
  static getQies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Qy",
  })
  @post("{id}")
  static createQy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
