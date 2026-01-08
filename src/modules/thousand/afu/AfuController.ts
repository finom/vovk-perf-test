import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afu")
export default class AfuController {
  @operation({
    summary: "Get Afu",
  })
  @get()
  static getAfu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afu",
  })
  @post("{id}")
  static createAfu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
