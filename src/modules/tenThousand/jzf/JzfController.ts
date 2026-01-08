import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jzf")
export default class JzfController {
  @operation({
    summary: "Get Jzf",
  })
  @get()
  static getJzf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzf",
  })
  @post("{id}")
  static createJzf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
