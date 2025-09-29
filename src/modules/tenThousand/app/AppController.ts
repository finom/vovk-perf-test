import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("apps")
export default class AppController {
  @operation({
    summary: "Get Apps",
  })
  @get()
  static getApps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create App",
  })
  @post("{id}")
  static createApp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
