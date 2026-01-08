import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lln")
export default class LlnController {
  @operation({
    summary: "Get Lln",
  })
  @get()
  static getLln = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lln",
  })
  @post("{id}")
  static createLln = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
