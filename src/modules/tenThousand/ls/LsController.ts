import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ls")
export default class LsController {
  @operation({
    summary: "Get Ls",
  })
  @get()
  static getLs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ls",
  })
  @post("{id}")
  static createLs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
