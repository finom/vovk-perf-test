import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cdm")
export default class CdmController {
  @operation({
    summary: "Get Cdm",
  })
  @get()
  static getCdm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdm",
  })
  @post("{id}")
  static createCdm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
