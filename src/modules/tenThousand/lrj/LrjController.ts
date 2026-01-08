import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lrj")
export default class LrjController {
  @operation({
    summary: "Get Lrj",
  })
  @get()
  static getLrj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrj",
  })
  @post("{id}")
  static createLrj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
