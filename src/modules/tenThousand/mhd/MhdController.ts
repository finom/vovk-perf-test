import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mhd")
export default class MhdController {
  @operation({
    summary: "Get Mhd",
  })
  @get()
  static getMhd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhd",
  })
  @post("{id}")
  static createMhd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
