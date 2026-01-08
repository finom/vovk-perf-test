import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgh")
export default class JghController {
  @operation({
    summary: "Get Jgh",
  })
  @get()
  static getJgh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgh",
  })
  @post("{id}")
  static createJgh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
