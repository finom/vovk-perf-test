import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ncm")
export default class NcmController {
  @operation({
    summary: "Get Ncm",
  })
  @get()
  static getNcm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncm",
  })
  @post("{id}")
  static createNcm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
