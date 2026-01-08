import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgk")
export default class BgkController {
  @operation({
    summary: "Get Bgk",
  })
  @get()
  static getBgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgk",
  })
  @post("{id}")
  static createBgk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
