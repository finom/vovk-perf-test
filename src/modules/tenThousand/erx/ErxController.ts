import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("erxes")
export default class ErxController {
  @operation({
    summary: "Get Erxes",
  })
  @get()
  static getErxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Erx",
  })
  @post("{id}")
  static createErx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
