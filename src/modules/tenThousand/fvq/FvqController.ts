import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvq")
export default class FvqController {
  @operation({
    summary: "Get Fvq",
  })
  @get()
  static getFvq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvq",
  })
  @post("{id}")
  static createFvq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
