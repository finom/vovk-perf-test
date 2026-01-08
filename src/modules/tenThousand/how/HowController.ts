import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("how")
export default class HowController {
  @operation({
    summary: "Get How",
  })
  @get()
  static getHow = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create How",
  })
  @post("{id}")
  static createHow = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
