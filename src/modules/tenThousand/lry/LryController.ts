import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lry")
export default class LryController {
  @operation({
    summary: "Get Lry",
  })
  @get()
  static getLry = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lry",
  })
  @post("{id}")
  static createLry = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
