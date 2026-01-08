import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ntf")
export default class NtfController {
  @operation({
    summary: "Get Ntf",
  })
  @get()
  static getNtf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ntf",
  })
  @post("{id}")
  static createNtf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
