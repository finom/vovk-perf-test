import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpq")
export default class DpqController {
  @operation({
    summary: "Get Dpq",
  })
  @get()
  static getDpq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpq",
  })
  @post("{id}")
  static createDpq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
