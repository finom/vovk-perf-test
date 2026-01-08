import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mdm")
export default class MdmController {
  @operation({
    summary: "Get Mdm",
  })
  @get()
  static getMdm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdm",
  })
  @post("{id}")
  static createMdm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
