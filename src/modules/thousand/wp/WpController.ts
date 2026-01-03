import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wps")
export default class WpController {
  @operation({
    summary: "Get Wps",
  })
  @get()
  static getWps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wp",
  })
  @post("{id}")
  static createWp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
