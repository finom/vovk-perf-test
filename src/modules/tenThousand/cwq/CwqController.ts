import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cwq")
export default class CwqController {
  @operation({
    summary: "Get Cwq",
  })
  @get()
  static getCwq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwq",
  })
  @post("{id}")
  static createCwq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
