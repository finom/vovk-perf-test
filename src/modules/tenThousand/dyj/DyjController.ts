import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dyj")
export default class DyjController {
  @operation({
    summary: "Get Dyj",
  })
  @get()
  static getDyj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyj",
  })
  @post("{id}")
  static createDyj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
