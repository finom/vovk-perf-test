import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbv")
export default class MbvController {
  @operation({
    summary: "Get Mbv",
  })
  @get()
  static getMbv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbv",
  })
  @post("{id}")
  static createMbv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
