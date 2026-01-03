import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ircs")
export default class IrcController {
  @operation({
    summary: "Get Ircs",
  })
  @get()
  static getIrcs = procedure({
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
