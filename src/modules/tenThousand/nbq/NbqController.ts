import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbq")
export default class NbqController {
  @operation({
    summary: "Get Nbq",
  })
  @get()
  static getNbq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbq",
  })
  @post("{id}")
  static createNbq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
