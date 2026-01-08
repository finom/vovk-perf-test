import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fic")
export default class FicController {
  @operation({
    summary: "Get Fic",
  })
  @get()
  static getFic = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fic",
  })
  @post("{id}")
  static createFic = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
