import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aop")
export default class AopController {
  @operation({
    summary: "Get Aop",
  })
  @get()
  static getAop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aop",
  })
  @post("{id}")
  static createAop = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
