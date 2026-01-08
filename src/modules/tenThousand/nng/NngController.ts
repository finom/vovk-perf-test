import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nng")
export default class NngController {
  @operation({
    summary: "Get Nng",
  })
  @get()
  static getNng = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nng",
  })
  @post("{id}")
  static createNng = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
