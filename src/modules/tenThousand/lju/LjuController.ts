import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lju")
export default class LjuController {
  @operation({
    summary: "Get Lju",
  })
  @get()
  static getLju = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lju",
  })
  @post("{id}")
  static createLju = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
