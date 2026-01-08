import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

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
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
