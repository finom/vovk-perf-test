import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fdl")
export default class FdlController {
  @operation({
    summary: "Get Fdl",
  })
  @get()
  static getFdl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdl",
  })
  @post("{id}")
  static createFdl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
