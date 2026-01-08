import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("btr")
export default class BtrController {
  @operation({
    summary: "Get Btr",
  })
  @get()
  static getBtr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btr",
  })
  @post("{id}")
  static createBtr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
