import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mav")
export default class MavController {
  @operation({
    summary: "Get Mav",
  })
  @get()
  static getMav = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mav",
  })
  @post("{id}")
  static createMav = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
