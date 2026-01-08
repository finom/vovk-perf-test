import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nrz")
export default class NrzController {
  @operation({
    summary: "Get Nrz",
  })
  @get()
  static getNrz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrz",
  })
  @post("{id}")
  static createNrz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
