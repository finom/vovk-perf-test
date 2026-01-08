import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fmd")
export default class FmdController {
  @operation({
    summary: "Get Fmd",
  })
  @get()
  static getFmd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmd",
  })
  @post("{id}")
  static createFmd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
