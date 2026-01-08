import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lmy")
export default class LmyController {
  @operation({
    summary: "Get Lmy",
  })
  @get()
  static getLmy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmy",
  })
  @post("{id}")
  static createLmy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
