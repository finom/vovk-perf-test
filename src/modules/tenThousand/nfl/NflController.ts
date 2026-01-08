import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfl")
export default class NflController {
  @operation({
    summary: "Get Nfl",
  })
  @get()
  static getNfl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfl",
  })
  @post("{id}")
  static createNfl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
