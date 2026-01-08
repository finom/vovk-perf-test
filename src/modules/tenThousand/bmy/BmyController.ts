import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bmy")
export default class BmyController {
  @operation({
    summary: "Get Bmy",
  })
  @get()
  static getBmy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmy",
  })
  @post("{id}")
  static createBmy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
