import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lom")
export default class LomController {
  @operation({
    summary: "Get Lom",
  })
  @get()
  static getLom = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lom",
  })
  @post("{id}")
  static createLom = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
