import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfi")
export default class CfiController {
  @operation({
    summary: "Get Cfi",
  })
  @get()
  static getCfi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfi",
  })
  @post("{id}")
  static createCfi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
