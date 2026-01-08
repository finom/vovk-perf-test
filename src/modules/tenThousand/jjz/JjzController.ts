import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jjz")
export default class JjzController {
  @operation({
    summary: "Get Jjz",
  })
  @get()
  static getJjz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjz",
  })
  @post("{id}")
  static createJjz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
