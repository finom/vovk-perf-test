import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbr")
export default class NbrController {
  @operation({
    summary: "Get Nbr",
  })
  @get()
  static getNbr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbr",
  })
  @post("{id}")
  static createNbr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
