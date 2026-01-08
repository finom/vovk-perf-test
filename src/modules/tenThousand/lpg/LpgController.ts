import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpg")
export default class LpgController {
  @operation({
    summary: "Get Lpg",
  })
  @get()
  static getLpg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpg",
  })
  @post("{id}")
  static createLpg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
