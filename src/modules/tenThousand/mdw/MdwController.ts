import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mdw")
export default class MdwController {
  @operation({
    summary: "Get Mdw",
  })
  @get()
  static getMdw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdw",
  })
  @post("{id}")
  static createMdw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
