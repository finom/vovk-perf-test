import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hls")
export default class HlsController {
  @operation({
    summary: "Get Hls",
  })
  @get()
  static getHls = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hls",
  })
  @post("{id}")
  static createHls = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
