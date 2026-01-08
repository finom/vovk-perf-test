import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzr")
export default class MzrController {
  @operation({
    summary: "Get Mzr",
  })
  @get()
  static getMzr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzr",
  })
  @post("{id}")
  static createMzr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
