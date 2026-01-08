import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgd")
export default class BgdController {
  @operation({
    summary: "Get Bgd",
  })
  @get()
  static getBgd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgd",
  })
  @post("{id}")
  static createBgd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
