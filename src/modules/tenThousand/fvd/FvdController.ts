import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvd")
export default class FvdController {
  @operation({
    summary: "Get Fvd",
  })
  @get()
  static getFvd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvd",
  })
  @post("{id}")
  static createFvd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
