import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwp")
export default class LwpController {
  @operation({
    summary: "Get Lwp",
  })
  @get()
  static getLwp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwp",
  })
  @post("{id}")
  static createLwp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
