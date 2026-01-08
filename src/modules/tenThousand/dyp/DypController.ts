import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dyp")
export default class DypController {
  @operation({
    summary: "Get Dyp",
  })
  @get()
  static getDyp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyp",
  })
  @post("{id}")
  static createDyp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
