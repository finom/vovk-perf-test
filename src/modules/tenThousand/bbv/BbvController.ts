import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbv")
export default class BbvController {
  @operation({
    summary: "Get Bbv",
  })
  @get()
  static getBbv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbv",
  })
  @post("{id}")
  static createBbv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
