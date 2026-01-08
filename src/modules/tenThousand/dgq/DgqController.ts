import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dgq")
export default class DgqController {
  @operation({
    summary: "Get Dgq",
  })
  @get()
  static getDgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgq",
  })
  @post("{id}")
  static createDgq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
