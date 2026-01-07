import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gst")
export default class GstController {
  @operation({
    summary: "Get Gst",
  })
  @get()
  static getGst = procedure({
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
