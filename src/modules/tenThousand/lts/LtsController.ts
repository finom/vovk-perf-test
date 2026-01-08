import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lts")
export default class LtsController {
  @operation({
    summary: "Get Lts",
  })
  @get()
  static getLts = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lts",
  })
  @post("{id}")
  static createLts = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
