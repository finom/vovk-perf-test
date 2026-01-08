import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbh")
export default class NbhController {
  @operation({
    summary: "Get Nbh",
  })
  @get()
  static getNbh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbh",
  })
  @post("{id}")
  static createNbh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
