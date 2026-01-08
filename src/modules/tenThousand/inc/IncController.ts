import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("inc")
export default class IncController {
  @operation({
    summary: "Get Inc",
  })
  @get()
  static getInc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inc",
  })
  @post("{id}")
  static createInc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
