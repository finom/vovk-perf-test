import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxe")
export default class MxeController {
  @operation({
    summary: "Get Mxe",
  })
  @get()
  static getMxe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxe",
  })
  @post("{id}")
  static createMxe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
