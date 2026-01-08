import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvj")
export default class FvjController {
  @operation({
    summary: "Get Fvj",
  })
  @get()
  static getFvj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvj",
  })
  @post("{id}")
  static createFvj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
