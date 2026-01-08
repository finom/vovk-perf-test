import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lub")
export default class LubController {
  @operation({
    summary: "Get Lub",
  })
  @get()
  static getLub = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lub",
  })
  @post("{id}")
  static createLub = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
