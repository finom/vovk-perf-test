import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfw")
export default class BfwController {
  @operation({
    summary: "Get Bfw",
  })
  @get()
  static getBfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfw",
  })
  @post("{id}")
  static createBfw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
