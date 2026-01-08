import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("msr")
export default class MsrController {
  @operation({
    summary: "Get Msr",
  })
  @get()
  static getMsr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msr",
  })
  @post("{id}")
  static createMsr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
