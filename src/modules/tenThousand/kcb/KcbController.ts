import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kcb")
export default class KcbController {
  @operation({
    summary: "Get Kcb",
  })
  @get()
  static getKcb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcb",
  })
  @post("{id}")
  static createKcb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
