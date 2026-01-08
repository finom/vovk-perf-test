import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ns")
export default class NsController {
  @operation({
    summary: "Get Ns",
  })
  @get()
  static getNs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ns",
  })
  @post("{id}")
  static createNs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
