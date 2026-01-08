import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bap")
export default class BapController {
  @operation({
    summary: "Get Bap",
  })
  @get()
  static getBap = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bap",
  })
  @post("{id}")
  static createBap = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
