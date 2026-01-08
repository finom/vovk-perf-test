import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwn")
export default class BwnController {
  @operation({
    summary: "Get Bwn",
  })
  @get()
  static getBwn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwn",
  })
  @post("{id}")
  static createBwn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
