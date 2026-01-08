import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mdr")
export default class MdrController {
  @operation({
    summary: "Get Mdr",
  })
  @get()
  static getMdr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdr",
  })
  @post("{id}")
  static createMdr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
