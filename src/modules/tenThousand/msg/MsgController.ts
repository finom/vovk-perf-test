import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msgs")
export default class MsgController {
  @operation({
    summary: "Get Msgs",
  })
  @get()
  static getMsgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msg",
  })
  @post("{id}")
  static createMsg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
