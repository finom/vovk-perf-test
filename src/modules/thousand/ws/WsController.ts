import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ws")
export default class WsController {
  @operation({
    summary: "Get Ws",
  })
  @get()
  static getWs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ws",
  })
  @post("{id}")
  static createWs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
