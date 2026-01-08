import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fds")
export default class FdsController {
  @operation({
    summary: "Get Fds",
  })
  @get()
  static getFds = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fds",
  })
  @post("{id}")
  static createFds = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
