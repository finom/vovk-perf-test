import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cww")
export default class CwwController {
  @operation({
    summary: "Get Cww",
  })
  @get()
  static getCww = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cww",
  })
  @post("{id}")
  static createCww = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
