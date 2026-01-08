import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwl")
export default class BwlController {
  @operation({
    summary: "Get Bwl",
  })
  @get()
  static getBwl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwl",
  })
  @post("{id}")
  static createBwl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
