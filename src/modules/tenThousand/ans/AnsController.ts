import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ans")
export default class AnsController {
  @operation({
    summary: "Get Ans",
  })
  @get()
  static getAns = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ans",
  })
  @post("{id}")
  static createAns = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
