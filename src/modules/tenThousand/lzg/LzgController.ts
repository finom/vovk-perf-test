import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzg")
export default class LzgController {
  @operation({
    summary: "Get Lzg",
  })
  @get()
  static getLzg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzg",
  })
  @post("{id}")
  static createLzg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
