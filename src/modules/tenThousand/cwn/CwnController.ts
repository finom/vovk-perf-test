import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cwn")
export default class CwnController {
  @operation({
    summary: "Get Cwn",
  })
  @get()
  static getCwn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwn",
  })
  @post("{id}")
  static createCwn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
