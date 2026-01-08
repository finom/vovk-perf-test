import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lor")
export default class LorController {
  @operation({
    summary: "Get Lor",
  })
  @get()
  static getLor = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lor",
  })
  @post("{id}")
  static createLor = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
