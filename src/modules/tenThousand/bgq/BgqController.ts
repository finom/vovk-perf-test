import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgq")
export default class BgqController {
  @operation({
    summary: "Get Bgq",
  })
  @get()
  static getBgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgq",
  })
  @post("{id}")
  static createBgq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
