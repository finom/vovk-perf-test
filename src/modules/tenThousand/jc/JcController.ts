import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jc")
export default class JcController {
  @operation({
    summary: "Get Jc",
  })
  @get()
  static getJc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jc",
  })
  @post("{id}")
  static createJc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
