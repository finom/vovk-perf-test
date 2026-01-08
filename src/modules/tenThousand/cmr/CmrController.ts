import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cmr")
export default class CmrController {
  @operation({
    summary: "Get Cmr",
  })
  @get()
  static getCmr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmr",
  })
  @post("{id}")
  static createCmr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
