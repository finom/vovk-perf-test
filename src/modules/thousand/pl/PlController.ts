import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("pl")
export default class PlController {
  @operation({
    summary: "Get Pl",
  })
  @get()
  static getPl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pl",
  })
  @post("{id}")
  static createPl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
