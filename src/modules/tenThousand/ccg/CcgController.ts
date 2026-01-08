import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ccg")
export default class CcgController {
  @operation({
    summary: "Get Ccg",
  })
  @get()
  static getCcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccg",
  })
  @post("{id}")
  static createCcg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
