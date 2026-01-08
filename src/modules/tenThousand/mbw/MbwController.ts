import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbw")
export default class MbwController {
  @operation({
    summary: "Get Mbw",
  })
  @get()
  static getMbw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbw",
  })
  @post("{id}")
  static createMbw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
