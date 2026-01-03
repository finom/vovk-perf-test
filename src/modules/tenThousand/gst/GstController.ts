import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsts")
export default class GstController {
  @operation({
    summary: "Get Gsts",
  })
  @get()
  static getGsts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gst",
  })
  @post("{id}")
  static createGst = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
