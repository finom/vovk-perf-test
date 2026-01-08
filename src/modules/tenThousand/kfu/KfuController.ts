import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfu")
export default class KfuController {
  @operation({
    summary: "Get Kfu",
  })
  @get()
  static getKfu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfu",
  })
  @post("{id}")
  static createKfu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
