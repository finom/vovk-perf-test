import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxf")
export default class BxfController {
  @operation({
    summary: "Get Bxf",
  })
  @get()
  static getBxf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxf",
  })
  @post("{id}")
  static createBxf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
