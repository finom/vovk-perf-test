import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jzx")
export default class JzxController {
  @operation({
    summary: "Get Jzx",
  })
  @get()
  static getJzx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzx",
  })
  @post("{id}")
  static createJzx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
