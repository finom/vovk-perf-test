import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jg")
export default class JgController {
  @operation({
    summary: "Get Jg",
  })
  @get()
  static getJg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jg",
  })
  @post("{id}")
  static createJg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
