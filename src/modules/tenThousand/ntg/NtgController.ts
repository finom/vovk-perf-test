import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ntg")
export default class NtgController {
  @operation({
    summary: "Get Ntg",
  })
  @get()
  static getNtg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ntg",
  })
  @post("{id}")
  static createNtg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
