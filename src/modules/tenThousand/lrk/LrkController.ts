import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lrk")
export default class LrkController {
  @operation({
    summary: "Get Lrk",
  })
  @get()
  static getLrk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrk",
  })
  @post("{id}")
  static createLrk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
