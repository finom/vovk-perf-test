import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nrk")
export default class NrkController {
  @operation({
    summary: "Get Nrk",
  })
  @get()
  static getNrk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrk",
  })
  @post("{id}")
  static createNrk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
