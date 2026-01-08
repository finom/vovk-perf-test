import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbz")
export default class NbzController {
  @operation({
    summary: "Get Nbz",
  })
  @get()
  static getNbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbz",
  })
  @post("{id}")
  static createNbz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
