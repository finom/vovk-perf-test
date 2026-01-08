import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nba")
export default class NbaController {
  @operation({
    summary: "Get Nba",
  })
  @get()
  static getNba = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nba",
  })
  @post("{id}")
  static createNba = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
