import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fsh")
export default class FshController {
  @operation({
    summary: "Get Fsh",
  })
  @get()
  static getFsh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsh",
  })
  @post("{id}")
  static createFsh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
