import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ndr")
export default class NdrController {
  @operation({
    summary: "Get Ndr",
  })
  @get()
  static getNdr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndr",
  })
  @post("{id}")
  static createNdr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
