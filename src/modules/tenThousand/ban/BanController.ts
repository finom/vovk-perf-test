import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ban")
export default class BanController {
  @operation({
    summary: "Get Ban",
  })
  @get()
  static getBan = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ban",
  })
  @post("{id}")
  static createBan = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
