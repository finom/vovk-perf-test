import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ndw")
export default class NdwController {
  @operation({
    summary: "Get Ndw",
  })
  @get()
  static getNdw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndw",
  })
  @post("{id}")
  static createNdw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
