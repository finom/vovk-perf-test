import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("acm")
export default class AcmController {
  @operation({
    summary: "Get Acm",
  })
  @get()
  static getAcm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acm",
  })
  @post("{id}")
  static createAcm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
