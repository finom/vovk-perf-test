import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jcg")
export default class JcgController {
  @operation({
    summary: "Get Jcg",
  })
  @get()
  static getJcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcg",
  })
  @post("{id}")
  static createJcg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
