import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mee")
export default class MeeController {
  @operation({
    summary: "Get Mee",
  })
  @get()
  static getMee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mee",
  })
  @post("{id}")
  static createMee = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
