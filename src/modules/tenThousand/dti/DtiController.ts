import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dti")
export default class DtiController {
  @operation({
    summary: "Get Dti",
  })
  @get()
  static getDti = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dti",
  })
  @post("{id}")
  static createDti = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
