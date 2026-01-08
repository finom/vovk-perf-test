import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fst")
export default class FstController {
  @operation({
    summary: "Get Fst",
  })
  @get()
  static getFst = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fst",
  })
  @post("{id}")
  static createFst = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
