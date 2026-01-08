import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nst")
export default class NstController {
  @operation({
    summary: "Get Nst",
  })
  @get()
  static getNst = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nst",
  })
  @post("{id}")
  static createNst = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
