import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mrd")
export default class MrdController {
  @operation({
    summary: "Get Mrd",
  })
  @get()
  static getMrd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrd",
  })
  @post("{id}")
  static createMrd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
