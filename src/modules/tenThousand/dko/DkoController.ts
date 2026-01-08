import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dko")
export default class DkoController {
  @operation({
    summary: "Get Dko",
  })
  @get()
  static getDko = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dko",
  })
  @post("{id}")
  static createDko = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
