import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kcx")
export default class KcxController {
  @operation({
    summary: "Get Kcx",
  })
  @get()
  static getKcx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcx",
  })
  @post("{id}")
  static createKcx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
