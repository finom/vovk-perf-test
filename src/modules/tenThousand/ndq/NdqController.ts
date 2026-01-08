import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ndq")
export default class NdqController {
  @operation({
    summary: "Get Ndq",
  })
  @get()
  static getNdq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndq",
  })
  @post("{id}")
  static createNdq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
