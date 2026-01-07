import { procedure, prefix, get, post, operation } from "vovk";

@prefix("app")
export default class AppController {
  @operation({
    summary: "Get App",
  })
  @get()
  static getApp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create App",
  })
  @post("{id}")
  static createApp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
