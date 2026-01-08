import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lof")
export default class LofController {
  @operation({
    summary: "Get Lof",
  })
  @get()
  static getLof = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lof",
  })
  @post("{id}")
  static createLof = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
