import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsgs")
export default class JsgController {
  @operation({
    summary: "Get Jsgs",
  })
  @get()
  static getJsgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsg",
  })
  @post("{id}")
  static createJsg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
