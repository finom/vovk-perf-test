import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lly")
export default class LlyController {
  @operation({
    summary: "Get Lly",
  })
  @get()
  static getLly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lly",
  })
  @post("{id}")
  static createLly = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
