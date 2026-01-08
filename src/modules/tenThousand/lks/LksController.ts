import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lks")
export default class LksController {
  @operation({
    summary: "Get Lks",
  })
  @get()
  static getLks = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lks",
  })
  @post("{id}")
  static createLks = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
