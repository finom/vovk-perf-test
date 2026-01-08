import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("loc")
export default class LocController {
  @operation({
    summary: "Get Loc",
  })
  @get()
  static getLoc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Loc",
  })
  @post("{id}")
  static createLoc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
