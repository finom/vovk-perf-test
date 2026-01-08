import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bdx")
export default class BdxController {
  @operation({
    summary: "Get Bdx",
  })
  @get()
  static getBdx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdx",
  })
  @post("{id}")
  static createBdx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
