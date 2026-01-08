import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mow")
export default class MowController {
  @operation({
    summary: "Get Mow",
  })
  @get()
  static getMow = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mow",
  })
  @post("{id}")
  static createMow = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
