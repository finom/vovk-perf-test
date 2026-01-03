import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hubs")
export default class HubController {
  @operation({
    summary: "Get Hubs",
  })
  @get()
  static getHubs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hub",
  })
  @post("{id}")
  static createHub = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
