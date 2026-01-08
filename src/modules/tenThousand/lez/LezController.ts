import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lez")
export default class LezController {
  @operation({
    summary: "Get Lez",
  })
  @get()
  static getLez = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lez",
  })
  @post("{id}")
  static createLez = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
