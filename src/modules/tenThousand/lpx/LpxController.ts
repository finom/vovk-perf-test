import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpx")
export default class LpxController {
  @operation({
    summary: "Get Lpx",
  })
  @get()
  static getLpx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpx",
  })
  @post("{id}")
  static createLpx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
