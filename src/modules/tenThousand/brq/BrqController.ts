import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("brq")
export default class BrqController {
  @operation({
    summary: "Get Brq",
  })
  @get()
  static getBrq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brq",
  })
  @post("{id}")
  static createBrq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
