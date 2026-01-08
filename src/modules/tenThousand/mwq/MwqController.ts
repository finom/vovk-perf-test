import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwq")
export default class MwqController {
  @operation({
    summary: "Get Mwq",
  })
  @get()
  static getMwq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwq",
  })
  @post("{id}")
  static createMwq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
