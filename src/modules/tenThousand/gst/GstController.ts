import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gst")
export default class GstController {
  @operation({
    summary: "Get Gst",
  })
  @get()
  static getGst = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gst",
  })
  @post("{id}")
  static createGst = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
