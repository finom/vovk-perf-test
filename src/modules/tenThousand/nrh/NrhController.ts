import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nrh")
export default class NrhController {
  @operation({
    summary: "Get Nrh",
  })
  @get()
  static getNrh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrh",
  })
  @post("{id}")
  static createNrh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
