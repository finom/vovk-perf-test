import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bly")
export default class BlyController {
  @operation({
    summary: "Get Bly",
  })
  @get()
  static getBly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bly",
  })
  @post("{id}")
  static createBly = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
