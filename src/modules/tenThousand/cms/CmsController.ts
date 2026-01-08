import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cms")
export default class CmsController {
  @operation({
    summary: "Get Cms",
  })
  @get()
  static getCms = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cms",
  })
  @post("{id}")
  static createCms = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
