import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lcy")
export default class LcyController {
  @operation({
    summary: "Get Lcy",
  })
  @get()
  static getLcy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcy",
  })
  @post("{id}")
  static createLcy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
