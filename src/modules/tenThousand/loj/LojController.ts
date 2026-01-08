import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("loj")
export default class LojController {
  @operation({
    summary: "Get Loj",
  })
  @get()
  static getLoj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Loj",
  })
  @post("{id}")
  static createLoj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
