import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbl")
export default class LblController {
  @operation({
    summary: "Get Lbl",
  })
  @get()
  static getLbl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbl",
  })
  @post("{id}")
  static createLbl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
