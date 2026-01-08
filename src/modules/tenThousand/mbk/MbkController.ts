import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbk")
export default class MbkController {
  @operation({
    summary: "Get Mbk",
  })
  @get()
  static getMbk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbk",
  })
  @post("{id}")
  static createMbk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
