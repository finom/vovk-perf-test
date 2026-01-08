import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mnk")
export default class MnkController {
  @operation({
    summary: "Get Mnk",
  })
  @get()
  static getMnk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnk",
  })
  @post("{id}")
  static createMnk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
