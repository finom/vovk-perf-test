import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fnv")
export default class FnvController {
  @operation({
    summary: "Get Fnv",
  })
  @get()
  static getFnv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnv",
  })
  @post("{id}")
  static createFnv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
