import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ccq")
export default class CcqController {
  @operation({
    summary: "Get Ccq",
  })
  @get()
  static getCcq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccq",
  })
  @post("{id}")
  static createCcq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
