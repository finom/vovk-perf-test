import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwx")
export default class BwxController {
  @operation({
    summary: "Get Bwx",
  })
  @get()
  static getBwx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwx",
  })
  @post("{id}")
  static createBwx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
