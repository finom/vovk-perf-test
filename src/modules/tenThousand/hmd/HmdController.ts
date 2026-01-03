import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmds")
export default class HmdController {
  @operation({
    summary: "Get Hmds",
  })
  @get()
  static getHmds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hmd",
  })
  @post("{id}")
  static createHmd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
