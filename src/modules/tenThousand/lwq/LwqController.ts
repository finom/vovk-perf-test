import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwq")
export default class LwqController {
  @operation({
    summary: "Get Lwq",
  })
  @get()
  static getLwq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwq",
  })
  @post("{id}")
  static createLwq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
