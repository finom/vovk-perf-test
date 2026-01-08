import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fol")
export default class FolController {
  @operation({
    summary: "Get Fol",
  })
  @get()
  static getFol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fol",
  })
  @post("{id}")
  static createFol = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
