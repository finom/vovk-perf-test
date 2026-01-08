import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bcs")
export default class BcsController {
  @operation({
    summary: "Get Bcs",
  })
  @get()
  static getBcs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcs",
  })
  @post("{id}")
  static createBcs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
