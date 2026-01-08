import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gly")
export default class GlyController {
  @operation({
    summary: "Get Gly",
  })
  @get()
  static getGly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gly",
  })
  @post("{id}")
  static createGly = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
