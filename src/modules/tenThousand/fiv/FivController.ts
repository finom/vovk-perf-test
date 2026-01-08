import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fiv")
export default class FivController {
  @operation({
    summary: "Get Fiv",
  })
  @get()
  static getFiv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fiv",
  })
  @post("{id}")
  static createFiv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
