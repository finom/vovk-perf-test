import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("biv")
export default class BivController {
  @operation({
    summary: "Get Biv",
  })
  @get()
  static getBiv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Biv",
  })
  @post("{id}")
  static createBiv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
