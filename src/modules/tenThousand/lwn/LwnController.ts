import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwn")
export default class LwnController {
  @operation({
    summary: "Get Lwn",
  })
  @get()
  static getLwn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwn",
  })
  @post("{id}")
  static createLwn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
