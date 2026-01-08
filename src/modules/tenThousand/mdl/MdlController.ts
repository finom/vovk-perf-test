import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mdl")
export default class MdlController {
  @operation({
    summary: "Get Mdl",
  })
  @get()
  static getMdl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdl",
  })
  @post("{id}")
  static createMdl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
