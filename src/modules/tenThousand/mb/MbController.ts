import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mb")
export default class MbController {
  @operation({
    summary: "Get Mb",
  })
  @get()
  static getMb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mb",
  })
  @post("{id}")
  static createMb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
