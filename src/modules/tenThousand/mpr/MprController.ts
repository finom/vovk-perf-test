import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mpr")
export default class MprController {
  @operation({
    summary: "Get Mpr",
  })
  @get()
  static getMpr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpr",
  })
  @post("{id}")
  static createMpr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
