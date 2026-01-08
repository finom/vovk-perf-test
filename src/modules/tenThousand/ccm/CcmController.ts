import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ccm")
export default class CcmController {
  @operation({
    summary: "Get Ccm",
  })
  @get()
  static getCcm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccm",
  })
  @post("{id}")
  static createCcm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
