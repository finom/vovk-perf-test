import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bim")
export default class BimController {
  @operation({
    summary: "Get Bim",
  })
  @get()
  static getBim = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bim",
  })
  @post("{id}")
  static createBim = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
