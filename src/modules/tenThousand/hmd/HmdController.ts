import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmds")
export default class HmdController {
  @operation({
    summary: "Get Hmds",
  })
  @get()
  static getHmds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hmd",
  })
  @post("{id}")
  static createHmd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
