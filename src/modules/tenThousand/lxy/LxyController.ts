import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxy")
export default class LxyController {
  @operation({
    summary: "Get Lxy",
  })
  @get()
  static getLxy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxy",
  })
  @post("{id}")
  static createLxy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
