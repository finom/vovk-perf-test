import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nt")
export default class NtController {
  @operation({
    summary: "Get Nt",
  })
  @get()
  static getNt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nt",
  })
  @post("{id}")
  static createNt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
