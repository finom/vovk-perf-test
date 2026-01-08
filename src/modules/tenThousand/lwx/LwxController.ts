import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwx")
export default class LwxController {
  @operation({
    summary: "Get Lwx",
  })
  @get()
  static getLwx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwx",
  })
  @post("{id}")
  static createLwx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
