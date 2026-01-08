import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nrb")
export default class NrbController {
  @operation({
    summary: "Get Nrb",
  })
  @get()
  static getNrb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrb",
  })
  @post("{id}")
  static createNrb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
