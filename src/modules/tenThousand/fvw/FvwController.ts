import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvw")
export default class FvwController {
  @operation({
    summary: "Get Fvw",
  })
  @get()
  static getFvw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvw",
  })
  @post("{id}")
  static createFvw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
