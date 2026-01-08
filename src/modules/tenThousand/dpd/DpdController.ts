import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpd")
export default class DpdController {
  @operation({
    summary: "Get Dpd",
  })
  @get()
  static getDpd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpd",
  })
  @post("{id}")
  static createDpd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
