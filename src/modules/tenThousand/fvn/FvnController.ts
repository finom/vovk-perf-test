import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvn")
export default class FvnController {
  @operation({
    summary: "Get Fvn",
  })
  @get()
  static getFvn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvn",
  })
  @post("{id}")
  static createFvn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
