import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mdv")
export default class MdvController {
  @operation({
    summary: "Get Mdv",
  })
  @get()
  static getMdv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdv",
  })
  @post("{id}")
  static createMdv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
