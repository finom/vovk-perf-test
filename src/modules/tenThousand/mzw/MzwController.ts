import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzw")
export default class MzwController {
  @operation({
    summary: "Get Mzw",
  })
  @get()
  static getMzw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzw",
  })
  @post("{id}")
  static createMzw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
