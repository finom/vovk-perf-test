import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwi")
export default class LwiController {
  @operation({
    summary: "Get Lwi",
  })
  @get()
  static getLwi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwi",
  })
  @post("{id}")
  static createLwi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
