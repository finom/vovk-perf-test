import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwn")
export default class MwnController {
  @operation({
    summary: "Get Mwn",
  })
  @get()
  static getMwn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwn",
  })
  @post("{id}")
  static createMwn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
