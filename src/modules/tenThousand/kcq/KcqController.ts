import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kcq")
export default class KcqController {
  @operation({
    summary: "Get Kcq",
  })
  @get()
  static getKcq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcq",
  })
  @post("{id}")
  static createKcq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
