import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lev")
export default class LevController {
  @operation({
    summary: "Get Lev",
  })
  @get()
  static getLev = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lev",
  })
  @post("{id}")
  static createLev = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
