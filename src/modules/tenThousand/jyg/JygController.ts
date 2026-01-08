import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jyg")
export default class JygController {
  @operation({
    summary: "Get Jyg",
  })
  @get()
  static getJyg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyg",
  })
  @post("{id}")
  static createJyg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
