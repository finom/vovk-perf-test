import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irc")
export default class IrcController {
  @operation({
    summary: "Get Irc",
  })
  @get()
  static getIrc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Irc",
  })
  @post("{id}")
  static createIrc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
