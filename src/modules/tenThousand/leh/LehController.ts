import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("leh")
export default class LehController {
  @operation({
    summary: "Get Leh",
  })
  @get()
  static getLeh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Leh",
  })
  @post("{id}")
  static createLeh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
