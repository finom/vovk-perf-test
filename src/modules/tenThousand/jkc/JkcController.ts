import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jkc")
export default class JkcController {
  @operation({
    summary: "Get Jkc",
  })
  @get()
  static getJkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkc",
  })
  @post("{id}")
  static createJkc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
