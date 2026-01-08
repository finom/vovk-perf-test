import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwv")
export default class LwvController {
  @operation({
    summary: "Get Lwv",
  })
  @get()
  static getLwv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwv",
  })
  @post("{id}")
  static createLwv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
