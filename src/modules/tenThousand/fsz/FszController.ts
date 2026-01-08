import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fsz")
export default class FszController {
  @operation({
    summary: "Get Fsz",
  })
  @get()
  static getFsz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsz",
  })
  @post("{id}")
  static createFsz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
