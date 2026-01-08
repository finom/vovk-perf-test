import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dix")
export default class DixController {
  @operation({
    summary: "Get Dix",
  })
  @get()
  static getDix = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dix",
  })
  @post("{id}")
  static createDix = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
