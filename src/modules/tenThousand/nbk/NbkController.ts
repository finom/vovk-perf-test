import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbk")
export default class NbkController {
  @operation({
    summary: "Get Nbk",
  })
  @get()
  static getNbk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbk",
  })
  @post("{id}")
  static createNbk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
