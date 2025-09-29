import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hubs")
export default class HubController {
  @operation({
    summary: "Get Hubs",
  })
  @get()
  static getHubs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hub",
  })
  @post("{id}")
  static createHub = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
