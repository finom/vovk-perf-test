import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efu")
export default class EfuController {
  @operation({
    summary: "Get Efu",
  })
  @get()
  static getEfu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efu",
  })
  @post("{id}")
  static createEfu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
