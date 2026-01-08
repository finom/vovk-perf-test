import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfb")
export default class DfbController {
  @operation({
    summary: "Get Dfb",
  })
  @get()
  static getDfb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfb",
  })
  @post("{id}")
  static createDfb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
