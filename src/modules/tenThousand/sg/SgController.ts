import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("sg")
export default class SgController {
  @operation({
    summary: "Get Sg",
  })
  @get()
  static getSg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sg",
  })
  @post("{id}")
  static createSg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
