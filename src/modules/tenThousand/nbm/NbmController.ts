import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbm")
export default class NbmController {
  @operation({
    summary: "Get Nbm",
  })
  @get()
  static getNbm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbm",
  })
  @post("{id}")
  static createNbm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
