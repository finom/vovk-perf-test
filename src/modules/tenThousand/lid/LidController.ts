import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lid")
export default class LidController {
  @operation({
    summary: "Get Lid",
  })
  @get()
  static getLid = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lid",
  })
  @post("{id}")
  static createLid = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
