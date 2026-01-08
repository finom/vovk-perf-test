import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fag")
export default class FagController {
  @operation({
    summary: "Get Fag",
  })
  @get()
  static getFag = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fag",
  })
  @post("{id}")
  static createFag = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
