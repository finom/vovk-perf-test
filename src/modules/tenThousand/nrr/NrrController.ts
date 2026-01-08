import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nrr")
export default class NrrController {
  @operation({
    summary: "Get Nrr",
  })
  @get()
  static getNrr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrr",
  })
  @post("{id}")
  static createNrr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
