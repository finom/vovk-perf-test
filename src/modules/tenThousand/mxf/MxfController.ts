import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxf")
export default class MxfController {
  @operation({
    summary: "Get Mxf",
  })
  @get()
  static getMxf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxf",
  })
  @post("{id}")
  static createMxf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
