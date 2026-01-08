import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwu")
export default class MwuController {
  @operation({
    summary: "Get Mwu",
  })
  @get()
  static getMwu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwu",
  })
  @post("{id}")
  static createMwu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
