import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nrn")
export default class NrnController {
  @operation({
    summary: "Get Nrn",
  })
  @get()
  static getNrn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrn",
  })
  @post("{id}")
  static createNrn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
