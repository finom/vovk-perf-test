import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbf")
export default class NbfController {
  @operation({
    summary: "Get Nbf",
  })
  @get()
  static getNbf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbf",
  })
  @post("{id}")
  static createNbf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
