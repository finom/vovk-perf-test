import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbw")
export default class NbwController {
  @operation({
    summary: "Get Nbw",
  })
  @get()
  static getNbw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbw",
  })
  @post("{id}")
  static createNbw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
