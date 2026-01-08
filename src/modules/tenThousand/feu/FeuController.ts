import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("feu")
export default class FeuController {
  @operation({
    summary: "Get Feu",
  })
  @get()
  static getFeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Feu",
  })
  @post("{id}")
  static createFeu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
