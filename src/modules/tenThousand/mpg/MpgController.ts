import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mpg")
export default class MpgController {
  @operation({
    summary: "Get Mpg",
  })
  @get()
  static getMpg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpg",
  })
  @post("{id}")
  static createMpg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
