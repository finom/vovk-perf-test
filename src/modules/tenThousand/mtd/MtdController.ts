import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mtd")
export default class MtdController {
  @operation({
    summary: "Get Mtd",
  })
  @get()
  static getMtd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtd",
  })
  @post("{id}")
  static createMtd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
