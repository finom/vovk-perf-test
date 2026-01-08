import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgr")
export default class BgrController {
  @operation({
    summary: "Get Bgr",
  })
  @get()
  static getBgr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgr",
  })
  @post("{id}")
  static createBgr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
